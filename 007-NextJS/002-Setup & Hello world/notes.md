**Setting up Next.js Development Environment**

1. **Requirements:**
   - Install Node.js from [nodejs.org](https://nodejs.org) (latest stable release).
   - Download and install a text editor; recommend using VS Code from [code.visualstudio.com](https://code.visualstudio.com).

2. **Workspace Setup:**
   - Create a folder (e.g., "nexs course") as the workspace.
   - Open VS Code inside the created folder.

3. **Create a New Next.js Project:**
   - Open the terminal in VS Code (Ctrl + `).
   - Run the command: `npx create next-app hello-world --ts`.
   - Answer prompts with suggested default values for TypeScript, ESLint, Tailwind CSS, source folder, App router, and no custom import Alias.

4. **Run the Application:**
   - Navigate to the project folder: `cd hello-world`.
   - Run the command: `npm run dev`.
   - Open the provided link in the browser (usually Local Host:3000).

5. **Edit and Save:**
   - Open `pages/index.tsx` in VS Code.
   - Replace the Next.js logo with the text "Hello World" and save.

6. **View Changes:**
   - Observe the "Hello World" text displayed in the browser.

**Notes:**
- The development server is set up using `npm run dev`.
- The default folder structure includes the `pages` directory for routing.
- The `create next-app` command initializes the project with TypeScript, ESLint, Tailwind CSS, and other configurations.

