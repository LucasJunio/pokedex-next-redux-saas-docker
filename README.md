<h1 align="center">
     🐙 <a href="#" alt=""> Node.js Test Pokedex</a>
</h1>

<h3 align="center">
    🧪 Frontend Test. 💚
</h3>

<h4 align="center">
	🚧 Development 🚀🚧
</h4>

### Prerequisites

Before you need install follow tools in your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/resources/what-container).
Beyond is good to has an editor for to work with the code like [VSCode](https://code.visualstudio.com/)

# Summary

- [1. Overview](#1-overview)
  - [1.1 Stack](#11-stack)
  - [1.2. Auxiliary libs](#12-auxiliary-libs)
- [2. How To Run](#2-🔬-how-to-run)
  - [2.1 Containers](#21-containers)
    - [2.1.1 How to add a new library in containers](#211-new-library)
  - [2.2 Local](#22-local)
- [3. How to create a new branch](#3-new-branch)
  - [3.1 Commits](#31-commits)
- [5. Software Architecture](#4-software-architecture)
- [5. Recommended Extensions](#5-recommended-extensions)

# 1. Overview

A Pokédex is an electronic device used in the Pokémon franchise, which is a popular media franchise created by Nintendo, Game Freak, and Creatures. The franchise revolves around fictional creatures called "Pokémon," which humans, known as "trainers," catch and train to battle each other for sport.

The Pokédex serves as an encyclopedia or database that provides information about different species of Pokémon. It's a tool that trainers use to learn more about the characteristics, abilities, evolutions, habitats, and other details of various Pokémon species.

## 1.1. Stack

- [Typescript](https://www.typescriptlang.org/.docs/handbook/typescript-in-5-minutes.html)
- [Node](https://nodejs.org/en/about/) >= v18.17.1
- [GitHub](https://github.com/)
- [Docker](https://www.docker.com/resources/what-container)
- [Next.js](https://nextjs.org)
- [React.js](https://react.dev/)

## 1.2. Auxiliary libs

- [SASS](https://sass-lang.com/)
- [React-redux](https://react-redux.js.org/)
- [Reduxjs-toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

# 2. 🔬 How To Run

## 2.1. Containers

```bash

# Clone this repository
$ git clone https://github.com/LucasJunio/pokedex

# Acces the project folder in your terminal/cmd
$ cd pokedex

# Build the image/container docker with Hot reloading / live reloading in development
$ docker-compose up -d --build

```

The aplication going to open in port:3000 - access [http://localhost:3000](http://localhost:3000)

### 2.1.1 How to add a new library in containers

Add a new library inside your container running live reload it's very symple, need just two steps:

First:

Add your libraries and versions (preference LTS) inside the package.json

Second:

At the very least you need to stop the current container from the pokedex application, to release used port

```bash

# (Optional) Delete your container and image docker for optimization
$ docker stop container_name_to_exclude
$ docker rm container_name_to_exclude
$ docker rmi IMAGE_NAME_OR_ID

# (Optional) Or just delete all containers and images
$ docker rm -f $(docker ps -aq)
$ docker rmi $(docker images -q)

# (Mandatory) Build the image/container docker with Hot reloading / live reloading in development
$ docker-compose up -d --build

```

-

Result:

![Add a new library](public/.docs/gifs/add-new-library.gif)

## 2.2. Local

Run the development server local with &quot;yarn&quot;, &quot;npm&quot;, &quot;pnpm&quot; or manager package your preference:

```bash

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

```

The aplication going to open in port:3000 - access [http://localhost:3000](http://localhost:3000)

# 3. How to create a new branch

Ever that's necessary to create a new branch feature, create by [main]branch, implement your development, merge this feature/branch to develop, when all it's ok, give a merge of this feature/branch to main[branch].

Let's go to follow the git flow patterns to create a new branch, to more info browse in link below to learn more how to implement in simple way.

Workflow gitflow: https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow

```bash

# Example creating a new branch
$ git checkout -b feature/TASK-1

```

## 3.1. Commits

For commit your changes, you can follow the suggestion to use conventional commits [https://www.conventionalcommits.org/en/v1.0.0/] for to improve your commit descriptions and help the understand of the team. Exist a extension in vscode that can help you with this mission.

vscode extension id in .vscode/extensions.json:

"recommendations": ["vivaxy.vscode-conventional-commits"]

# 4. Software Architecture

Main folder tree and your goals

C:.

- ├───.vscode - configuration settings specific to the Visual Studio Code (VS Code).
- ├───app - entry point of your application, where you start your app.
- ├───components - This is where you would put your reusable React components.
- │ ├───base - Components that are used by all application
- │ ├───common - General-purpose components that can be reused across containers and different parts of the application.
- │ ├───containers - Components that combine smaller components to create more complex UI elements or pages.
- ├───constants - storing and managing constant values, such as configuration settings.
- ├───public - Static assets like images, fonts, or other resources that are publicly accessible.
- │ ├───.docs - This folder may contain project-related documentation.
- ├───store - This folder could house the state management.
- ├───types - TypeScript type definitions that help ensure type safety in your codebase.
- └───utils - This folder can contain utilities or helper tools.

# 5. Recommended Extensions

You can check out a list of recommended extensions in the file `.vscode/extensions.json`, or by opening the "Extensions" Tab in the "Recommended" pane.

---

## 🦸 Author

<a href="https://madaztec.com/">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/20959222?s=460&u=18b10f7fb7d2aca87ee0589d1825e754c67d222b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Lucas Junio</b></sub></a> <a href="https://madaztec.com/" title="Madaztec">🚀</a>
 <br />

---

## 📝 Licence

Made with ❤️ by Lucas Junio 👋🏽 [Contact](https://www.linkedin.com/in/lucas-junio/)
