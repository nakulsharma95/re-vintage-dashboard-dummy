// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// ui: UI related changes that does not affect functionality but the visual of a website

const USER_ID_INDEX = 2;
const USER_ID_INDEX_DATA = 100
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [USER_ID_INDEX, 'always', USER_ID_INDEX_DATA],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [USER_ID_INDEX, 'always', USER_ID_INDEX_DATA],
    'header-max-length': [USER_ID_INDEX, 'always', USER_ID_INDEX_DATA],
    'scope-case': [USER_ID_INDEX, 'always', 'lower-case'],
    'subject-case': [
      USER_ID_INDEX,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [USER_ID_INDEX, 'never'],
    'subject-full-stop': [USER_ID_INDEX, 'never', '.'],
    'type-case': [USER_ID_INDEX, 'always', 'lower-case'],
    'type-empty': [USER_ID_INDEX, 'never'],
    'type-enum': [
      USER_ID_INDEX,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
        'ui',
      ],
    ],
  },
};
