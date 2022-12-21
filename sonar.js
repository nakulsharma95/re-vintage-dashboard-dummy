const scanner = require('sonarqube-scanner');

scanner(
  {
    /* The configuration for the sonarqube-scanner module. */
    serverUrl: 'https://sonar.techchefz.com',
    token: 'your_token',
    /* Setting the project name and the source directory. */
    options: {
      'sonar.projectName': 'your_project_name',
      'sonar.sources': '.',
    },
  },
  /* A function that is called after the sonarqube-scanner module is done. */
  () => process.exit()
);
