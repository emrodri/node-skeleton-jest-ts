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

