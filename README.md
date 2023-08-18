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
- [4. Recommended Extensions](#4-recommended-extensions)

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

- [Tailwind](https://tailwindcss.com/)
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

### 2.1. How to add a new library in containers

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

![Add a new library](.docs\gifs\add-new-library.gif)

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

Let's go to follow the git flow patterns to create a new branch, to more info browse in link below to learn more how to implement in simple way.

https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow

```bash

# Example creating a new branch
$ git checkout -b feature/TASK-1

```

# 4. Recommended Extensions

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
