---
slug: "/blog/2020/02/setting-up-electron-react-and-typescript"
date: 2020-02-15
title: "Setting up an Electron app with React and TypeScript"
description: "After going through a ton of tutorials on setting up Electron with React and TypeScript and virtually all of them being out of date or different implementations completely. I felt as though I could post about how I was able to finally get this all working together for a new app I am making."
excerpt: "A tutorial on getting start with Electron, React, and TypeScript from scratch..."
---

In this tutorial, we will learn how to setup an electron application from scratch. We will not be using the popular tool `create-react-app` but instead will set it up on our own without webpack. Even though we are not using webpack here, webpack can be added as a bundler and most of the same steps should still apply.

# Setup NPM project

### 1. Create project directory

```zsh
$ mkdir <project-name> && cd <project-name>
```

### 2. Create `package.json` within new project folder

```zsh
$ npm init -y
```

### 3. Install the dependencies needed for this project

_Dev Dependencies:_

```zsh
$ npm install --save-dev typescript electron @types/react @types/react-dom
```

_Dependencies:_

```zsh
$ npm install react react-dom
```

# Setup TypeScript configuration (tsconfig.json)

### 1. Using `npx` we can run the global `tsc` command to generate a TypeScript config file

```zsh
$ npx tsc --init
```

_Inside of our project directory, we should now have a file named `tsconfig.json`_

### 2. Uncomment the `outDir` and `jsx` option in our `tsconfig.json`

### 3. Change value of `jsx` to `react` from `preserve`

### 3. Add `include` as a sibling to `compilerOptions` and add `src` folder to it

_Our tsconfig.json should now look like this_

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "none",
    "outDir": "dist",
    "jsx": "react",
    "strict": true,
    "moduleResolution": "node",
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"]
}
```

# Create the rest of our project structure

### 1. Create our `index.html` file and paste the following contents

```zsh
$ touch index.html
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Electron React & TypeScript Example</title>
  </head>
  <body>
    <h1>Hello electron</h1>
    <div id="app"></div>
    <script>
      require("./dist/component.js")
    </script>
  </body>
</html>
```

### 2. Create our folder `src`

```zsh
$ mkdir src
```

### 3. Create our main electron file (`src/index.ts`) and paste the following contents

```zsh
$ touch src/index.ts
```

```ts
import { app, BrowserWindow } from "electron"

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // this line is very important as it allows us to use `require` syntax in our html file.
    },
  })
  mainWindow.loadFile(`index.html`)
}

app.whenReady().then(createWindow)
```

### 4. Create our react component (`src/component.ts`) and paste the following contents

```zsh
$ touch src/component.tsx
```

```tsx
import * as React from "react"
import * as ReactDOM from "react-dom"

function App() {
  return <h1>Hello, react!</h1>
}

ReactDOM.render(<App />, document.getElementById("app"))
```

# Setup scripts to build and run our application

We will setup the commands `npm build` and `npm start` and then point our `package.json` to look for `index.js` in `dist/`

### 1. Setup `npm run build` command

```json
{
  ...
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  ...
}
```

### 2. Setup `npm start` command

```json
{
  ...
  "scripts": {
    "start": "npm run build && electron .",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  ...
}
```

### 3. Point `package.json` "main" to look at `dist/`

```json
{
  "main": "dist/index.js"
}
```

---

At this point you should be able to run `npm start` and your application should start by displaying "Hello electron" and then right under that it should say "Hello, react!". If you are not able to get this working, feel free to cross-reference it with the repository in which this tutorial is based on.

[GitHub Repository Here](https://github.com/DanceParty/electron-typescript-react-starter)
