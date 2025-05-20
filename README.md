<h1 align="center">Calingo - Front-End</h1>

<p align="center">
  <!-- Status -->
  <img src="https://img.shields.io/badge/status-in%20development-yellow" alt="Project Status"/>

  <!-- Tech Stack -->
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white" alt="Jest"/>

  <!-- Tools -->
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="npm"/>

  <!-- Quality & Testing -->
  <img src="https://img.shields.io/badge/tests-passing-brightgreen" alt="Tests Passing"/>

  <!-- Security -->
  <img src="https://github.com/CalingoTeam/Front-End/actions/workflows/codeql.yml/badge.svg" alt="CodeQL"/>
  <img src="https://img.shields.io/badge/Dependabot-enabled-brightgreen?logo=dependabot" alt="Dependabot Enabled"/>

  <!-- Repo Info -->
  <img src="https://img.shields.io/github/repo-size/CalingoTeam/Front-End" alt="Repo Size"/>
  <img src="https://img.shields.io/github/last-commit/CalingoTeam/Front-End" alt="Last Commit"/>
</p>

<p align="center">
  This is the web front-end of <strong>Calingo</strong>, a platform designed to explore, translate, and understand Brazilian regional expressions and slang. Built with <strong>React</strong>, it connects to a secure API to provide users with an engaging and informative experience.
</p>

## 🌐 Features

- 🔍 **Search** for regional expressions and meanings
- 📚 **Contextual explanations** with examples
- 🔐 **Authentication** with JWT
- 📝 **User suggestions** of new expressions
- 🧪 Tested with **Jest**


## 🧱 Project Structure

```

Front-End/
├── .github/               # GitHub Actions workflows
├── src/                   # Main React source code
│   ├── assets/            # Images, logos, icons
│   ├── components/        # Reusable UI components
│   ├── App.jsx            # Root component
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── .gitignore             # Ignored files/folders
├── README.md              # Project documentation
├── eslint.config.js       # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
├── package-lock.json      # Dependency lock file
├── vite.config.js         # Vite configuration

````


## 🚀 Tech Stack

- **React** (Vite or CRA)
- **JavaScript (ES6+)**
- **React Router DOM**
- **Jest** (for testing)
- **JWT-based authentication**
- **CSS Modules / Styled Components / SCSS** (depending on the implementation)


## 🛠️ Setup and Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/CalingoTeam/Front-End.git
   cd Front-End/project-calingo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Access the app in your browser at `http://localhost:5173` (Vite default) or `http://localhost:3000` (CRA default).


## 🧪 Run Tests

```bash
npm run test
```


## 📦 Build for Production

```bash
npm run build
```


## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

