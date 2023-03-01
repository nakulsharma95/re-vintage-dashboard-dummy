import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { main } from '../../utils/instanceUrl';

export const fetchData = createAsyncThunk(
  'data/getData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await main.get(`/todos`);
      return response?.data;
    } catch (error) {
      // eslint-disable-next-line no-undef
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  value: [],
  status: '',
  error: '',
};

export const mainSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = [...action.payload];
      })

      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const {} = mainSlice.actions;

export default mainSlice.reducer;
