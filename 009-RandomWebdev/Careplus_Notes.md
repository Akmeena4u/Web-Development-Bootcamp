<details>
  <summary>Intro to Careplus App</summary>

  ### Project Overview

#### Introduction
In this project, you'll build and deploy Care Pools, a healthcare management system designed to streamline the tedious checkup process. The app includes real-time SMS notifications, making it a valuable real-world solution to mention in job interviews. Here's a breakdown of the features you'll implement:

- **Authentication and Registration**: Users can fill out personal information, medical history, and identification details.
- **Appointment Scheduling**: Users can easily schedule appointments with their preferred doctors.
- **Confirmation Screen**: Users receive a confirmation screen upon successful booking.
- **Access Permissions**: A model for granting access permissions.
- **Admin Panel**: A comprehensive admin panel for scheduling or canceling appointments with SMS notifications.

Throughout this project, you'll learn Next.js with server-side rendering, nested layouts, server actions, and revalidation. You'll also use TypeScript, React Hook Form, Zod, Shadcn, and Tailwind CSS to create a modern, mobile-responsive UI. Other features include file storage and SMS notifications with Twilio, and performance monitoring with Sentry.

#### Course Requirements
- **Prerequisites**: Basic to medium understanding of React or Next.js.
- **Tools and Software**: All software used in this course, such as AppID, ChatJS, and others, is free and requires no credit card.

#### Learning Outcomes
By the end of this course, you'll be confident in building complex forms and integrating real-time SMS notifications into any application.

### Section 1: Welcome Page and Authentication

#### Welcome Page
- **Functionality**: Users can sign in using their phone numbers.
- **Features**: 
  - Country selection with automatic country code filling.
  - Phone number input.
  - Redirect to the registration page for first-time users.

#### Code Implementation
1. **Sign-in Form**: Create a form that captures the user's phone number and country code.
2. **Redirection Logic**: Implement logic to redirect users to the registration page if it's their first visit.

### Section 2: Registration Page

#### User Registration
- **Information Collected**: 
  - General details: Name, email, phone number, date of birth.
  - Medical information: Primary care physician, allergies, current medications, medical history.
  - Identification: Type and number of ID, scanned copy of the document.
  - Privacy Terms: Consent to privacy terms.

#### Code Implementation
1. **Form Creation**: Use React Hook Form and Zod for form validation and management.
2. **File Upload**: Implement functionality for users to upload identification documents.
3. **Privacy Terms**: Add a section for users to review and consent to privacy terms.

### Section 3: Appointment Scheduling

#### Appointment Page
- **Functionality**: Users can schedule a new appointment.
- **Features**: 
  - Doctor selection.
  - Date and time selection.
  - Appointment reasons and comments.
  - Confirmation notification.

#### Code Implementation
1. **Scheduling Form**: Create a form for users to input appointment details.
2. **Notification Logic**: Implement logic to display a successful booking notification.

### Section 4: Admin Panel

#### Admin Functionality
- **Features**: 
  - Overview of scheduled, pending, and canceled appointments.
  - Data table with appointment details.
  - Actions for scheduling, confirming, or canceling appointments.

#### Code Implementation
1. **Admin Access**: Create a modal for admins to enter a passkey to access the admin page.
2. **Admin Dashboard**: Build a dashboard displaying appointment stats and details.
3. **Action Buttons**: Add buttons for admins to confirm or cancel appointments, triggering SMS notifications.

### Section 5: Real-time SMS Notifications

#### SMS Integration
- **Tools Used**: Twilio for sending SMS notifications.
- **Features**: 
  - Confirmation SMS upon successful booking.
  - Cancellation SMS with valid reason.

#### Code Implementation
1. **Twilio Setup**: Configure Twilio for sending SMS notifications.
2. **Notification Logic**: Implement the backend logic to trigger SMS notifications based on admin actions.

### Section 6: Final Touches and Deployment

#### Final Touches
- **Responsive Design**: Ensure the entire application is mobile-responsive.
- **Testing and Validation**: Test all features to ensure they work seamlessly.

#### Deployment
1. **Build**: Create a production build of your application.
2. **Deploy**: Deploy your application using a platform like Vercel or Netlify.

### Additional Resources

- **Codebase**: Access the open-source code base for reference.
- **Design Files**: Use the custom Figma design to guide your development.
- **Support**: Join the Discord server for help with bugs and issues.

By following these notes, you'll have a comprehensive guide to building and deploying your healthcare management system with Next.js. Good luck, and happy coding!
</details>

---
<details>
<summary>Setup</summary>
### Setup Notes

#### Project Initialization

1. **Create Project Folder**:
   - Create a new empty folder on your desktop named `care-pools`, which is the code name for the application.
   - Drag and drop this folder into Visual Studio Code.

2. **Initialize Project**:
   - Open the terminal in VS Code.
   - Run the following command to initialize the project:
     ```bash
     npx create-next-app@latest care-pools --typescript --eslint --tailwindcss
     ```
   - When prompted:
     - Select "Yes" for using the App Router.
     - Leave other options as default and press Enter.

3. **Clean Up Starter Code**:
   - **Home Page**:
     - Go to `app/page.tsx` and remove the existing code, including the `<main>` tag and return statement.
     - Replace it with:
       ```tsx
       export default function Home() {
         return (
           <div>
             <h1 className="text-3xl underline">Home</h1>
           </div>
         );
       }
       ```
   - **Layout**:
     - Modify `app/layout.tsx` to set metadata and update the layout:
       ```tsx
       import './globals.css';
       import { Inter } from 'next/font/google';
       
       const inter = Inter({ subsets: ['latin'] });
       
       export const metadata = {
         title: 'Care Pools - Healthcare Management System',
       };
       
       export default function RootLayout({
         children,
       }: {
         children: React.ReactNode;
       }) {
         return (
           <html lang="en">
             <body className={inter.className}>{children}</body>
           </html>
         );
       }
       ```
   - **Global CSS**:
     - Update `app/globals.css` to remove existing styles and retain only Tailwind utilities:
       ```css
       @tailwind base;
       @tailwind components;
       @tailwind utilities;
       ```

4. **Verify Tailwind Setup**:
   - Add Tailwind classes to the `<h1>` in `Home` component and check in the browser:
     ```tsx
     <h1 className="text-3xl underline">Home</h1>
     ```
   - Run the development server:
     ```bash
     npm run dev
     ```
   - Open `http://localhost:3000` in your browser to see the changes.

#### Layout and Styling Enhancements

1. **Update Layout Font**:
   - In `app/layout.tsx`, replace the default font with `plus Jakarta Sans`:
     ```tsx
     import { Plus_Jakarta_Sans } from 'next/font/google';
     
     const plusJakartaSans = Plus_Jakarta_Sans({
       weight: ['300', '400', '500', '600', '700'],
       subsets: ['latin'],
     });
     
     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
           <body className={plusJakartaSans.className}>{children}</body>
         </html>
       );
     }
     ```

2. **Add Utility Functions**:
   - Create a `lib/utils.ts` file to include utility functions for class names:
     ```ts
     import clsx from 'clsx';
     import { merge } from 'tailwind-merge';
     
     export const cn = (...classes: (string | undefined)[]) => merge(clsx(...classes));
     ```

   - Install required packages:
     ```bash
     npm install clsx tailwind-merge
     ```

3. **Update Global Styles**:
   - Extend colors in `tailwind.config.js`:
     ```js
     module.exports = {
       theme: {
         extend: {
           colors: {
             'dark-300': '#2d2d2d',
           },
         },
       },
       plugins: [require('tailwindcss-animate')],
     };
     ```
   - Install Tailwind CSS Animate plugin:
     ```bash
     npm install tailwindcss-animate
     ```

4. **Integrate Shadcn UI**:
   - Install Shadcn UI:
     ```bash
     npx shadcn-ui@latest init
     ```
   - Install the Button component:
     ```bash
     npx shadcn-ui@latest add button
     ```
   - Use the Button component in `Home` page:
     ```tsx
     import { Button } from 'shadcn-ui';
     
     export default function Home() {
       return (
         <div>
           <h1 className="text-3xl underline text-white">Home</h1>
           <Button>Click Me</Button>
         </div>
       );
     }
     ```

5. **Enable Dark Mode in Shadcn UI**:
   - Install Next Themes:
     ```bash
     npm install next-themes
     ```
   - Create a `components/ThemeProvider.tsx` file:
     ```tsx
     import { ThemeProvider as NextThemeProvider } from 'next-themes';
     
     export default function ThemeProvider({ children }: { children: React.ReactNode }) {
       return (
         <NextThemeProvider defaultTheme="dark" enableSystem={false}>
           {children}
         </NextThemeProvider>
       );
     }
     ```
   - Wrap your application with the `ThemeProvider` in `app/layout.tsx`:
     ```tsx
     import ThemeProvider from '@/components/ThemeProvider';
     
     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
           <body>
             <ThemeProvider>{children}</ThemeProvider>
           </body>
         </html>
       );
     }
     ```

### Summary

- **Project Setup**: Initialized with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.
- **Styling**: Updated global styles and font settings.
- **Component Integration**: Added Tailwind utilities and Shadcn UI components.
- **Dark Mode**: Configured dark mode using Next Themes.

By following these steps, you’ve set up a solid foundation for developing your healthcare management application. Continue building and integrating features as described in the course.
</details>


---

<details>
<summary> Home page</summary>
### Notes on HomePage and Patient Form Implementation

#### **HomePage Layout and Styling**

1. **Container Setup**
   - Create a `div` with:
     - `className="flex h-screen max-h-screen"`
     - This sets it as a flex container with full height and a maximum height of 100vh.

2. **Section Styling**
   - Add a section within the `div`:
     - `className="remove-scroll-bar container my-auto"`
     - This class removes the scrollbar and centers the container vertically with margin auto.

3. **Sub-Container Setup**
   - Inside the section, add another `div`:
     - `className="sub-container max-w-[496px]"`
     - `max-w-[496px]` ensures a maximum width of 496 pixels for the sub-container.

4. **Image Display**
   - Import and display an image using Next.js’s `Image` component:
     ```jsx
     <Image
       src="/assets/icons/logo.svg"
       alt="patient"
       height={1000}
       width={1000}
       className="mb-12 h-10 w-fit"
     />
     ```
   - Ensure the image source path matches the location in the `public` folder.

5. **Patient Form Component**
   - Create a `patient-form` component in the `components/forms` directory:
     - File: `patient-form.tsx`
     - Use `rafc` to generate a basic React arrow function component.

6. **Footer Section**
   - Below the `patient-form`, add a `div` with:
     - `className="text-sm font-regular mt-20 flex justify-between"`
   - Inside this `div`:
     - A `p` tag for copyright:
       ```jsx
       <p className="text-dark-600 text-left xl:text-left">2024 Care Pulse</p>
       ```
     - A `Link` component from `next/link`:
       ```jsx
       <Link href="/?admin=true" className="text-green-500">Admin</Link>
       ```

7. **Big Image**
   - Add a big image with:
     ```jsx
     <Image
       src="/assets/images/onboarding-img.png"
       alt="Patient"
       height={1000}
       width={1000}
       className="side-img max-w-50%"
     />
     ```

8. **Future Enhancements**
   - Comment to add OTP verification later:
     ```jsx
     {/* TODO: Add OTP verification */}
     ```

#### **Patient Form Component**

1. **Form Setup**
   - Create a reusable form using `react-hook-form`, `zod`, and `shadcn/ui`.
   - Install the required packages:
     ```bash
     npm install react-hook-form zod shadcn/ui
     ```

2. **Form Schema**
   - Define the form schema using `zod`:
     ```ts
     import { z } from 'zod';

     const formSchema = z.object({
       username: z.string().min(2, "Username must be at least 2 characters"),
     });
     ```

3. **Patient Form Component**
   - Update `patient-form.tsx`:
     ```tsx
     import { useForm } from 'react-hook-form';
     import { zodResolver } from '@hookform/resolvers/zod';
     import { z } from 'zod';
     
     const patientForm = () => {
       const { control, handleSubmit, formState: { errors } } = useForm({
         resolver: zodResolver(formSchema),
       });

       const onSubmit = (data) => {
         console.log(data);
       };

       return (
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1">
           {/* Form Fields */}
         </form>
       );
     };
     
     export default patientForm;
     ```

4. **Custom Form Field Component**
   - Create `custom-form-field.tsx`:
     ```tsx
     import { Control, Controller } from 'react-hook-form';
     
     interface CustomProps {
       control: Control<any>;
       name: string;
       label?: string;
       placeholder?: string;
       iconSource?: string;
       iconAlt?: string;
       disabled?: boolean;
     }
     
     const CustomFormField = ({ control, name, label, placeholder, iconSource, iconAlt, disabled }: CustomProps) => {
       return (
         <div className="flex items-center">
           {iconSource && <img src={iconSource} alt={iconAlt} className="mr-2" />}
           <Controller
             control={control}
             name={name}
             render={({ field }) => (
               <input
                 {...field}
                 placeholder={placeholder}
                 disabled={disabled}
                 className="input-field"
               />
             )}
           />
           {label && <label htmlFor={name}>{label}</label>}
         </div>
       );
     };
     
     export default CustomFormField;
     ```

5. **Render Form Fields Dynamically**
   - Use `renderField` to handle different field types:
     ```tsx
     const renderField = ({ type, ...props }) => {
       switch (type) {
         case 'input':
           return <input {...props} />;
         case 'checkbox':
           return <input type="checkbox" {...props} />;
         // Add more cases for different field types
         default:
           return null;
       }
     };
     ```

By implementing the above structure, you can efficiently build and manage complex forms, keeping your components reusable and maintainable.
</details>

---

<details><summary> Appwrite Setup</summary>

setting up and configuring Appwrite, creating databases, collections, and integrating Appwrite SDK:


## **Setting Up Appwrite**

### **1. Creating an Appwrite Project**
1. **Sign In**: Use GitHub or another method to sign in to Appwrite.
2. **Create a Project**:
   - Navigate to the Appwrite dashboard.
   - Click **"Create Project"**.
   - Enter a project name (e.g., `care_pools`).
   - Select a deployment region.
   - Click **"Create"**.

### **2. Configuring Environment Variables**
1. **Copy Project ID**: From the project dashboard, copy the Project ID.
2. **Create `.env.local` File**:
   - Add the following to the file:
     ```plaintext
     PROJECT_ID=<your_project_id>
     API_KEY=<your_api_key>
     DATABASE_ID=<your_database_id>
     PATIENT_COLLECTION_ID=<your_patient_collection_id>
     DOCTOR_COLLECTION_ID=<your_doctor_collection_id>
     APPOINTMENT_COLLECTION_ID=<your_appointment_collection_id>
     NEXT_PUBLIC_BUCKET_ID=<your_bucket_id>
     NEXT_PUBLIC_ENDPOINT=http://localhost:3000
     ```
   - Replace placeholders with actual IDs.

### **3. Generating API Key**
1. **Generate API Key**:
   - Go to **Integrations** > **API Keys**.
   - Click **"Create API Key"**.
   - Name the key (e.g., `jmore_care_pools`).
   - Set permissions to all scopes.
   - Click **"Create"** and copy the API key.

### **4. Creating Databases and Collections**
1. **Create Database**:
   - Go to **Databases** > **Create Database**.
   - Name it (e.g., `care_pools_db`).
   - Click **"Create"** and copy the Database ID.

2. **Create Collections**:
   - **Patient Collection**:
     - Go to **Collections** > **Create Collection**.
     - Name it `patient`.
     - Click **"Create"** and copy the Collection ID.
     - Update environment variable:
       ```plaintext
       PATIENT_COLLECTION_ID=<your_patient_collection_id>
       ```
   - **Doctor Collection**:
     - Repeat the above steps, name it `doctor`, and copy its ID.
     - Update environment variable:
       ```plaintext
       DOCTOR_COLLECTION_ID=<your_doctor_collection_id>
       ```
   - **Appointment Collection**:
     - Repeat the above steps, name it `appointment`, and copy its ID.
     - Update environment variable:
       ```plaintext
       APPOINTMENT_COLLECTION_ID=<your_appointment_collection_id>
       ```

### **5. Creating Storage Buckets**
1. **Create Storage Bucket**:
   - Go to **Storage** > **Create Bucket**.
   - Name it (e.g., `care_pools_storage`).
   - Click **"Create"** and copy the Bucket ID.
   - Update environment variable:
     ```plaintext
     NEXT_PUBLIC_BUCKET_ID=<your_bucket_id>
     ```

### **6. Setting Up Appwrite SDK**
1. **Install SDK**:
   - Run the following command to install Appwrite Node.js SDK:
     ```bash
     npm install node-appwrite
     ```
2. **Configure SDK**:
   - Create a file `appwrite.config.js`:
     ```javascript
     import * as SDK from 'node-appwrite';

     const client = new SDK.Client();
     client
       .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT) // Your Appwrite Endpoint
       .setProject(process.env.PROJECT_ID) // Your Project ID
       .setKey(process.env.API_KEY); // Your API Key

     export const databases = new SDK.Databases(client);
     export const storage = new SDK.Storage(client);
     export const users = new SDK.Users(client);
     export const messaging = new SDK.Messaging(client);
     ```
   - Adjust environment variables and imports as necessary.

### **7. Configuring Collection Schemas**
1. **Configure Patient Collection Schema**:
   - Go to **Databases** > **Collections** > **Patient** > **Settings**.
   - Add attributes:
     - **email**: Type `email`, required.
     - **phone**: Type `string`, size `100`, required.
     - **user_id**: Type `string`, size `100`, required.
     - **name**: Type `string`, size `100`, required.
     - **privacy_consent**: Type `boolean`, default `null`, required.
     - **gender**: Type `enum`, options `male`, `female`, `other`.
     - **birth_date**, **address**, **occupation**, **emergency_contact_name**, **emergency_contact_number**, **insurance_provider**, **insurance_policy_number**, **allergies**, **current_medication**, **family_medical_history**, **past_medical_history**, **identification_type**, **identification_number**, **identification_document_id**, **identification_document_url**, **primary_physician**: Type `string`, size `100`.
   - Allow permissions: **Create**, **Read**, **Update**, **Delete** for all roles.

### **8. Creating Functions and Integration**
1. **Create a File for Actions**:
   - In the `lib` folder, create `actions/patientActions.js`:
     ```javascript
     import { databases } from '../appwrite.config';

     export async function createUser(user) {
       try {
         const result = await databases.createDocument(
           process.env.DATABASE_ID,
           process.env.PATIENT_COLLECTION_ID,
           user.user_id,
           user
         );
         return result;
       } catch (error) {
         if (error.code === 409) {
           // Handle existing user case
           const existingUser = await databases.listDocuments(
             process.env.DATABASE_ID,
             process.env.PATIENT_COLLECTION_ID,
             [SDK.Query.equal('email', user.email)]
           );
           return existingUser.documents[0];
         }
         throw error;
       }
     }
     ```

### **9. Testing and Verification**
1. **Verify Configuration**:
   - Test the user creation process to ensure proper integration with Appwrite.
   - Correct the endpoint if needed.


</details>
