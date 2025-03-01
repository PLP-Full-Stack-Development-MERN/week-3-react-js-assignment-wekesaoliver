````markdown
# React Assignment with Vite and Tailwind CSS

This project demonstrates the fundamentals of React.js, including component creation, state management, and styling with Tailwind CSS. It is built using **Vite** for fast development and **Tailwind CSS** for utility-first styling.

---

## Table of Contents

1. [Installation](#installation)
2. [Running the Project](#running-the-project)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Screenshots](#screenshots)

---

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wekesaoliver/my-react-app.git
   ```
````

2. **Navigate to the project directory**:

   ```bash
   cd my-react-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

---

## Running the Project

To start the development server and view the project in your browser:

1. Run the following command:

   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Project Structure

The project is organized as follows:

```
my-react-app/
├── public/                  # Static assets
├── src/                     # Source code
│
│   ├── components/          # React components
│   │   ├── Counter.jsx      # Counter component
│   │   ├── Header.jsx       # Header component
│   │   ├── Profile.jsx      # Profile component
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Tailwind CSS file
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore file
├── index.html               # HTML entry point
├── package-lock.json        # Lock file for dependencies
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
```

---

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Node.js**: JavaScript runtime for running the development server.
- **NPM**: Package manager for installing dependencies.

---

## Screenshots

Here’s what the project looks like:

![Header Component, Profile Component, Counter Component](./public/project.png)

---

## How to Use

1. **Header Component**:

   - Displays the title "Week 3: React Assignment" at the top of the page.

2. **Profile Component**:

   - Accepts `name` and `email` as props and displays them.
   - Example:
     ```jsx
     <Profile name="Oliver Mekesa" email="oliverwekesa361@gmail.com" />
     ```

3. **Counter Component**:
   - Tracks and displays a count using React's `useState` hook.
   - Click the "Increment" button to increase the count.

---
