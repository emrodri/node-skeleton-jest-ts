# Node.Js Express API REST with typescript and TDD

## Steps

### Initialize project

` npm init --yest `

Add README.md

Initialize git

```
git init 
git add .
git commit -m "Initial commit"

```

### Add express and typescript

Add express

`npm i express`

Add typescript and types

`npm i -D typescript @types/express ts-node-dev`

Add scripts to tsc in package.json

Add to package.json:  ` "scripts": { "tsc": "tsc" } `

Initialize typescript

`npm run tsc -- --init`

Uncomment and modify in tsconfig.json `"outDir": "./build" `

Add gitignore with node_modules and build folders

Add to scripts in package.json run scripts:
 ```
 "dev": "ts-node-dev --respawn --transpileOnly ./app/app.ts",
 "prod": "tsc && node ./build/app.js",
 ```

### Initialize express app and create health check controller

Add express application in app/app.ts

Add health-check controller in app/controllers/healt_check.
controller.ts

### Add Jest and health check controller test

Add Jest

`npm i -D jest @types/jest ts-jest`

Add test script to package.json

`"test": "jest"`

Init jest-ts config

`npx ts-jest config:init`

Create a test for health_check.controller