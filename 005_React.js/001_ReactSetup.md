# React Environment Setup Guide

## Method 1

1. **Install Node.js:**
   - Ensure Node.js is installed on your machine.

2. **Create React App:**
   - Open a terminal and navigate to the desired folder for your React project.
   - Run the following commands:
     ```bash
     npm install -g npm
     npx create-react-app myreactproject
     ```

3. **Test Installation:**
   - Navigate to the project folder.
   - Start the local development server:
     ```bash
     npm run start
     ```
   - Open your browser and visit [http://localhost:3000](http://localhost:3000) to see your React app.

4. **Build for Production:**
   - Create a production build with minimized code:
     ```bash
     npm run build
     ```

5. **Deployment:**
   - Deploy your project on hosting platforms like GitHub Pages, Netlify, Vercel, or traditional web hosts.

6. **Extra Tools:**
   - Install the React Dev Tools Chrome extension for inspecting React component hierarchies.
   - Consider using Thunder Client to test APIs within the editor.
   - Auto Rename Tag is a useful extension for seamless HTML and JSX tag renaming.

## Method 2

1. **Install Node.js:**
   - Ensure Node.js is installed on your machine.

2. **Create Vite Project:**
   - Open a terminal and navigate to the desired folder for your React project.
   - Run the following commands:
     ```bash
     npm install -g npm
     npm create vite@latest
     ```
   - Provide project details, select framework, and choose the variant.

3. **Move to Project Folder:**
   - Navigate to the created project folder using:
     ```bash
     cd projectname
     ```

4. **Start Development Server:**
   - Run the following command to start the development server:
     ```bash
     npm run dev
     ```

**Note:** In both methods, delete unnecessary files (e.g., App.js, index.js in Method 1; App.jsx, main.jsx in Method 2) and clean up the project as needed. This ensures a streamlined and clean React project structure.
