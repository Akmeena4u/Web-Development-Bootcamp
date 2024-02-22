**Understanding React Server Components (RSC) in Next.js**

**1. React Server Components (RSC) Overview:**
   - Introduced by the React team in version 18.
   - Quickly embraced by Next.js.
   - Divides React components into two types: Server Components and Client Components.

**2. Key Points about RSC:**
   - In Next.js, all components are server components by default.
   - Server components can perform tasks like reading files or fetching data from a database.
   - Server components lack the ability to use hooks or handle user interactions.

**3. Client Components:**
   - To create a client component, add `use client` at the top of the component file.
   - Client components cannot perform tasks like reading files but have the ability to use hooks and manage interactions.
   - Traditional React components we are familiar with from previous React versions.

