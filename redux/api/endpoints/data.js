import { apiSlice } from '../main';

export const dataEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
      // transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: (result) =>
        result
          ? ['Todos', ...result.map(({ id }) => ({ type: 'Todos', id }))]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Todos', id: arg }],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: '/todos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `/todos/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Todos', id: arg.id }],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Todos', id: arg.id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTodosQuery,
  useLazyGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = dataEndpoints;
