# Isabell Juliet Berzsenyi's Portfolio

## Table of Contents

1. [Getting Started](#getting-started)
2. [File Structure](#file-structure)
3. [Technologies](#technologies)<br />
   - [Netlify](#netlify)<br />
   - [Prismic](#prismic)<br />
   - [Learn Next.js](#learn_next.js)
4. [Developers](#developers)

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/isabellberzsenyi/isabell-juliet.git
```

2. **Change directories**

```bash
cd isabell-juliet
```

3. **Set up environment variables**
   In the project directory there is a file called `env_example`, which holds all the necessary environment variables. Most importantly, it contains the Prismic URL.

Copy the file and add the values to the variables.

```sh
cp env_example .env
```

```sh
PRISMIC_REPOSITORY_NAME="XXXXXXXXXXXXXXX"
NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN="XXXXXXXXXXXXXXX"
```

- PRISMIC_REPOSITORY_NAME should be the name of the Prismic Repository
- NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN is the access token generated from the Prismic Repository

Please note these environment variables will need to be set within the Netlify account as well.

4. **Install the packages**

```bash
# In the project directory
yarn install
```

5. **Run the server locally**

```bash
yarn dev
```

Now the server will run locally, most likely on `http://localhost:3000`. Your work will be displayed, and as changes are saved it will auto-refresh the site.

## :file_folder: File Structure

A quick look at the top-level file structure used

    .
    ├── /components
    ├── /lib
    ├── /node_modules
    ├── /pages
    ├── /public
    ├── /style
    ├── /styles
    ├── .gitignore
    ├── yarn.lock
    ├── package.json
    └── README.md

1.  **`/components`**: This directory contains all of the components and styling for the entire project

2.  **`/lib`**: This directory contains all of the cross-project reusable functions

3.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages)are automatically installed.

4.  **`/pages`**: This directory contains the routes, with each route in a seperate file. Next.js then pre-renders every page in the **`/pages`** directory.

5.  **`/public`**: This directory is used by Next.js to statically serve files.

6.  **`/style`**: This directory contains cross-project reusable styling

7.  **`/styles`**: This directory contains the global styles utilized in the project.

8.  **`.gitignore`**: This file tells git which files will not maintain a version history, thus don't need to be tracked.

9.  **`yarn.lock`**: (First see `package.json`, below) This is an automatically generated file based on the exact versions of your npm dependencies used for the project. **You won't change this file directly.**

10. **`package.json`**: A manifest file for Node.js projects, this file includes the metadata for the project. Metadat incluedes the project's name, author, etc. This manifest is how npm knows which packages to isntall to run the project.

11. **`README.md`**: A reference text file containing information about the project.

## :gear: Technologies

The website is built on the following technologies:

- [Netlify](https://www.netlify.com/): Site hosting provider
- [Prismic](https://prismic.io/): Content Management Site
- [Next.js](https://nextjs.org/): Static site generator for the site

### :diamond_shape_with_a_dot_inside: Netlify

The Isabell Juliet site is deployed on [Netlify](https://www.netlify.com/). Netlify is continuous integration and deployment platform that allows you to run web projects at global scale. There are a couple ways to update and deploy the site:

- **Manual Deploy**: Go to [https://app.netlify.com/sites/isabelljuliet/deploys](https://app.netlify.com/sites/isabelljuliet/deploys). Click on **Trigger deploy**, then on **Deploy site**. Now the build will begin for your site. If your build is successful, the logs will tell you that the site is live! If any errors arise in the logs, please fix them and redeploy.

- **Merging a Pull Request**: Netlify is hooked up to GitHub, thus when a PR is merged into the master branch Netlify will automaticaly deploy to keep the sit up-to-date.
  Note: Upon creating and updating any PR, a `deploy preview` can be accessed from the bottom of the page - this

Note: In Netlify, when a PR is created there is a link, **Deploy Preview ##**, that will allow you to preview the changes.

### :large_orange_diamond: Prismic

This website uses [Prismic](https://prismic.io/) as its Content Management System (CMS). Prismic is a headless CMS that offers the flexibility to easily manage content. To update data in Prismic, the following must be done:

1. ** Publish document on Prismic ** Publishing new data will not immediately show up on the site, since the data will need to be queried and stored in the build.

2. ** Restart the development server** When the server restarts the new data published is grabbed and used in the build.

Prismic documentation: [https://prismic.io/docs](https://prismic.io/docs)

### :zap: Learn NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :phone: Developer

This repository is for [Isabell Juliet's Portfolio](https://isabelljuliet.netlify.app/) and is written by Isabell Berzsenyi.
