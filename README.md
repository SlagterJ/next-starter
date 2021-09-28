# Next Starter

Next Starter is a starter template repository I made including
Typescript, Redux, SASS, Jest and Storybook.

---

## Table of Contents

Getting Started

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Commands](#commands)

Using This Template

- [Usage](#usage)
- [Recommended Directory Structure](#recommended-directory-structure)
- [Changing Default Ports](#changing-default-ports)

Other

- [Contributing](#contributing)

# Features

- Easy to install NextJS boilerplate that works with
  no configuration needed!
- Typescript for easy, scalable code.
- Redux included for complex global state management.
- Typesafe React Redux hooks to avoid those nasty 'any' types.
- Jest pre-configured to let you unit test without the headaches
  of configuring it.
- Storybook working out-of-the-box with Next and SASS modules.

# Prerequisites

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (If you feel like it.)

# Install

### Github Template

GitHub has a template repository feature which automatically lets you
use this starter for your own project. To use it, simply press the
green "Use this template" button at the top of this page.

### Manually

First, clone the project files. Replace your-project-name with your own
chosen name.

```sh
git clone --depth 1 https://github.com/SlagterJ/next-starter.git your-project-name
```

Then install the included NPM packages.

NPM

```sh
npm install
```

Yarn

```sh
yarn install
```

# Commands

### Regular Development Server

Starts the project in watch mode and lets you access the client on
http://localhost:3000. It will automatically hot reload when changes
are made.

NPM

```sh
npm run start
```

Yarn

```sh
yarn start
```

### Unit Testing

Starts all unit tests (files that end with .test) using Jest. It
will automatically reload when changes are made.

NPM

```sh
npm run test
```

Yarn

```sh
yarn test
```

### Lint

Start ESLint linting.

NPM

```sh
npm run lint
```

Yarn

```sh
yarn lint
```

### Launch Storybook

Launches a Storybook server on http://localhost:6006 that
lets you view your stories (files that end with .stories). It
will automatically reload when changes are made.

NPM

```sh
npm run storybook
```

Yarn

```sh
yarn storybook
```

### Build Storybook

Lets you build your Storybook into a static web app that you can
deploy.

NPM

```sh
npm run build-storybook
```

Yarn

```sh
yarn build-storybook
```

### Export Project To Static HTML

Lets you get static HTML files that you can deply on a simple
Apache/Nginx server.

NPM

```sh
npm run export
```

Yarn

```sh
yarn export
```

### Build Project

Lets you build your entire project into a deployable, minimised
web app compatible with Vercel by default.

NPM

```sh
npm run build
```

Yarn

```sh
yarn build
```

# Usage

### Technology Documentation

Here I will only explain usage regarding this specific project.
For documentation and usage examples on how to use the technology
included, refer to the following pages.

[Typescript](https://www.typescriptlang.org/docs/)
<br />

[React](https://reactjs.org/docs/getting-started.html)
<br />

[Next](https://nextjs.org/docs/getting-started)
<br />

[Redux](https://redux-toolkit.js.org/introduction/getting-started)
<br />

[React Redux](https://react-redux.js.org/introduction/getting-started)
<br />

[Next Redux Wrapper](https://github.com/kirill-konshin/next-redux-wrapper#usage)
<br />

[SASS](https://sass-lang.com/guide)
<br />

[Jest](https://jestjs.io/docs/getting-started)
<br />

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
<br />

[Storybook](https://storybook.js.org/docs/react/get-started/introduction)

### Redux Hooks

Custom React Redux hooks are provided that add an extra
typesafe layer on top of the default ones, namely, useDispatch
and useSelector. These custom hooks are available simply from
`/app/hooks`. When reducers are added to the store these hooks
will dynamically adjust their types.

Example

```TSX
// components/CounterButton.tsx

// Get the typesafe hooks instead of the default ones
import { useDispatch, useSelector } from "../app/hooks";

const CounterButton = () => {
  // Use them like you normally would with React Redux
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
```

### SASS Modules

SASS modules are a scalable way to manage your HTML classnames.
It makes sure classnames won't accidentally overlap and lets you
assign styles without having to worry about other component's classes.
They are completely configured and automatically supported by both Jest
and Storybook in this project.

Example

```SCSS
// components/Title/Title.module.scss

// Define classes like normal here
.text {
  color: red;
}
```

```TSX
// components/Title/Title.tsx

import styles from "./Title.module.scss";

const Title = () => {
  // Use them like a JS object here
  return (
    <h1 className={styles.text}>I am a red title!</h1>

```

Output

```HTML
<h1 class="Title_text__1I0-X">I am a red title!</h1>
```

As you can see, it adds your component's name at the beginning
and a random code at the end. This makes sure other classes called
text won't override it.

Same example with SASS syntax

```SASS
// components/Title/Title.module.sass

.text
  color: red

```

# Recommended Directory Structure

### Pages

Next has its own system for routing that routes incoming
request dynamically based on your file structure like this.

```
src/
├─ app/
├─ components/
├─ pages/
│  ├─ profile/
│  │  ├─ [id].tsx
│  ├─ 404.tsx
│  ├─ about.tsx
│  ├─ index.tsx
│  ├─ _app.tsx
```

`_app.tsx` will always be loaded on every route, by default
it loads Redux into the app. It could also be used to load
a navigation bar on every page, for example.

`index.tsx` is your home page at the base of the url.

`404.tsx` shows up on routes that don't exist.

URL parameters can be used like shown in `profile/[id].tsx` here.
For more info on this read the NextJS docs.

### Components

The recommended structure for components is the following.

```
src/
├─ app/
├─ components/
│  ├─ Button/
│  │  ├─ Button.module.scss
│  │  ├─ Button.stories.tsx
│  │  ├─ Button.test.tsx
│  │  ├─ Button.tsx
│  │  ├─ index.tsx
├─ pages/
```

The index.tsx should export the Button by default, like this.

```TSX
// components/Button/index.tsx

import Button from "./Button";
export default Button;
```

This lets you import the Button in other files with `/Button`
instead of `/Button/Button.tsx`.

This Directory structure isn't enforced. Both Jest and Storybook can
load files automatically no matter where they are in your `src/` directory.
If you're not comfortable with this, just design your own!

# Changing Default Ports

You might want to change the default ports for the dev server or
Storybook if you're using them already, or if you're used to
another port.

### Next Dev Server

Go to your package.json and edit the following line.

```JSON
{
  "scripts": {
    "start": "next dev -p port-you-desire"
  }
}
```

### Storybook

The same goes for Storybook, edit in package.json.

```JSON
{
  "scripts": {
    "storybook": "storybook -p port-you-desire"
  }
}
```

# Contributing

This project was made out of tiredness for needing to set up
these technologies over and over again, mixed with my experience
with people that don't know how to get them to work together.
<br />
If you've gotten any use out of this project and you'd like to
contribute, maybe we could help others and ourselves together!

- Don't hesitate to send me a pull request! I love those!
- You can tell me how much my project sucks at `slagterj2001@gmail.com`!
- If you feel like it, you can direct others at this project to help
  them out too.
