# 📝 Blogging with Astro

A simple blog site built using [Astro](https://astro.build/). 

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node)

## 🚀 Getting Started

1. **Clone the repository**

   Clone this project to your local machine and go to the project folder
   ```bash
   cd blogging_with_astro
   ```

3. **Install dependencies**

   Run the node package manager to install required dependencies for astro
   ```bash
   npm install
   ```
   or even better to use this if `package-lock.json` is already present
   ```bash
   npm ci
   ```

4. **Run the development server**

   Start the dev server
   ```bash
   npm run dev
   ```
   Open the site in browser by visiting: http://localhost:4321

5. **Build the site**

   Build the static production version of the site 
   ```bash 
   npm run build
   ```
   The output will be inside the `dist/` directory. 
   (Optionally) To preview the built site locally
   ```bash 
   npm run preview 
   ```

## 🔨 Creating an astro app from scratch
   To spin up a new astro app, run this command
   ```bash
   npm create astro@latest
   ```
   It guides you through a setup wizard where you can:
   - Name your project
   - Choose a template (e.g., blog, docs, portfolio, or minimal)
   - Choose a framework integration (React, Vue, etc.) or none
   - Install dependencies right away
   Then go to the project directory
   ```bash
   cd {name_of_your_project}
   ```
   Then start the dev server as usual
   ```bash
   npm run dev
   ```


## 📑 Project Structure
`./blogging_with_astro/`
- `src/`
  - `pages/`: Consists of static routes (`index.astro`, `blog.astro`, etc.) in the site
    - `blogs/`: Consists of actual blog **content** files in markdown (`blog1.md`, `blog2.md`, etc.)
  - `layouts/`: Contains reusable HTML layouts like `BaseLayout.astro` and `BlogLayout.astro`, with `<slot>` tags as placeholders where page-specific markup can be inserted
  - `components/`: Contains reusable UI components like `Navigation.astro` and `Contact.astro` for navbar and contact footer respectively, to be rendered on each page
  - `styles/`: External stylesheets applied to the blog site pages
- `public/`
  - `favicon.svg`: Astro logo displayed in tab name

## 🔥 I love Astro because it offers

| Feature             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Markdown Support| Write content-rich pages using Markdown and Astro automatically renders them in readable HTML |
| File-based Routing  | Unlike SPAs, it uses file-based routing with pages created from `.astro` or `.md` files in the `pages/` directory  |
| SSR or Static       | Can generate static sites (SSG) or use server-side rendering (SSR)         |
| Integrations        | Easy to add Frameworks like React, Vue, Tailwind etc., with `astro add`    |
| Partial Hydration   | Only hydrate interactive parts (e.g., a dropdown or chart) using **Astro Islands** |
