### Future improvements and notes

+ Introduce Typescript and add typings across the project
+ Use yarn instead of npm for package manager
+ Simplify the code-splitting/rendered logic in src/renderer.js
+ Integrate a test step into the deployment process (with coverage reporting)
+ Rework the project scripts to follow common practice (The current scripts - start, build, etc are enforced by the OpenShift Node.js image)
+ Move dev-specific packages like babel and webpack plugins to devDependencies
+ Introduce an i18n service to handle translations if required (src/i18n file containing texts currently)