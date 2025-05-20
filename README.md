# Calingo - Front-End

This is the web front-end of **Calingo**, a platform designed to explore, translate, and understand Brazilian regional expressions and slang. Built with **React**, it connects to a secure API to provide users with an engaging and informative experience.


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

