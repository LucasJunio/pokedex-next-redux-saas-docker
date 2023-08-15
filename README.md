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
- [3. Recommended Extensions](#3-recommended-extensions)

# 1. Overview

A Pokédex is an electronic device used in the Pokémon franchise, which is a popular media franchise created by Nintendo, Game Freak, and Creatures. The franchise revolves around fictional creatures called "Pokémon," which humans, known as "trainers," catch and train to battle each other for sport.

The Pokédex serves as an encyclopedia or database that provides information about different species of Pokémon. It's a tool that trainers use to learn more about the characteristics, abilities, evolutions, habitats, and other details of various Pokémon species.

## 1.1. Stack

- [Typescript](https://www.typescriptlang.org/.docs/handbook/typescript-in-5-minutes.html)
- [Node](https://nodejs.org/en/about/) >= v16.13.1
- [GitHub](https://github.com/)
- [Docker](https://www.docker.com/resources/what-container)
- [Next.js](https://nextjs.org)
- [React.js](https://react.dev/)

## 1.2. Auxiliary libs

- [Tailwind](https://tailwindcss.com/)

# 2. 🔬 How To Run

## 2.1. Containers

```bash

# Clone this repository
$ git clone https://github.com/LucasJunio/pokedex

# Acces the project folder in your terminal/cmd
$ cd pokedex

# Copy base.env to .env
$ cp base.env .env

# Build the image docker
$ docker build -t pokedex .

# Build the container docker
$ docker run -p 3000:3000 pokedex

```

The aplication going to open in port:3000 - access [http://localhost:3000](http://localhost:3000)

## 2.2. Local

Run the development server local with &quot;yarn&quot;, &quot;npm&quot;, &quot;pnpm&quot; or manager package your preference:

```bash

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

```

The aplication going to open in port:3000 - access [http://localhost:3000](http://localhost:3000)

# 3. Recommended Extensions

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
