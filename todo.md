### Future improvements and notes

+ Introduce [Typescript](https://github.com/jaredpalmer/razzle/tree/master/examples/with-typescript) and add typings across the project
+ Use hooks for stage management instead of Redux (reason #1)
+ Use [react-testing-library](https://github.com/testing-library/react-testing-library) for component testing instead of enzyme (reason #1) 
+ Use yarn instead of npm as a package manager
+ Integrate a test step into the deployment process (with coverage reporting)
+ Introduce an i18n service to handle translations if required (src/i18n file containing texts currently)
+ Use [semantic-release](https://github.com/semantic-release/semantic-release) to release and version the application; Commit message rules are already enforced by [commitlint](https://github.com/conventional-changelog/commitlint), so feel free to generate changelogs when releasing

*Reason #1: Explicitness when choosing Redux over others; Faster to get up and running, and mainly smaller learning curve for newcomers to the project*
