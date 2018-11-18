# firebase-play
Place to play around with firebase functions, and investigate how to test and debug code

## Useful firebase commands

|                                         |                                              |
| --------------------------------------- | ----------------------------------           |
| Install Firebase CLI                    | npm install -g firebase-tools                |
| Initialise Firebase Project             | firebase init                                |
| Firebase login                          | firebase login                               |
| List Firebase databases                 | firebase list                                |
| Switch to a different Firebase database | firebase use DATABASE_NAME                   |
| Install Firebase functions SDK          | npm install --save firebase-functions@latest |
| Deploy Firebase functions               | firebase deploy --only functions             |
| Function shell                          | firebase functions:shell                     |
| | |

## Unit testing Firebase Functions

The following is a set of steps for setting up unit tests for Firebase Cloud Functions.
### install libraries

```
npm install --save-dev firebase-functions-test
npm install --save-dev mocha
```

### Serve Firebase Locally

```
firebase functions:config:get > .runtimeconfig.json
firebase serve
```

### Deploy Firebase Functions

```
firebase deploy --only functions -m 'deploying first functions'
firebase deploy --only functions:helloWorld
```

### Firebase Profiling

```
firebase database:profile
open https://firebase.google.com/docs/database/usage/profile
```