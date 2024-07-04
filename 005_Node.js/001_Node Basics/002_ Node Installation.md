

#### Installing Node.js:
1. **Check Installation**: Verify Node.js installation using:
   - `node -v` (displays Node.js version)
   - `npm -v` (displays npm version)
2. **Installation Steps**:
   - Download Node.js from [nodejs.org](https://nodejs.org).
   - Choose the LTS (Long Term Support) version for stable releases suitable for production.
   - Select LTS Version of NodeJS.
   - LTS - Long Term Support , Start with even number (Stable realese - can be used in production)
   - Beta(Current) - Bugs , Unstability , start with odd number
   - Accept terms and install using default settings.
3. **Environment Setup**: Add Node.js installation path (typically `C:\Program Files\nodejs`) to the system's PATH environment variable.

---

#### Using Node.js:
- **Node REPL**: Provides an interactive JavaScript shell where you can test and run JavaScript code directly.
  - Start Node REPL: Type `node` in your terminal or command prompt.
  - Exit Node REPL: Use `Ctrl + D`.
- **Running JavaScript files**: Execute JavaScript files using `node filename.js` in the terminal.
---

#### What is npm (Node Package Manager)?
- **npm** is the **package manager** for Node.js, used for installing and managing third-party libraries (packages) written in JavaScript.
- It simplifies dependency management, allowing developers to reuse code and manage project dependencies efficiently.

#### Using npm:
- **Installing Packages**: Install packages globally or locally in your project using `npm install package-name`.
- **Package.json**: The `package.json` file defines the project's metadata and dependencies.
  - Generate a `package.json` file: Use `npm init` and follow the prompts.
- **Managing Dependencies**: Update, remove, or list installed packages using npm commands (`npm update`, `npm uninstall`, `npm list`, etc.).
