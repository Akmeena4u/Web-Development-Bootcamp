## Cookies Explained

Cookies are small pieces of data that websites store on your device (computer, phone, tablet) when you visit them. They act like a mini memory for the website, allowing it to remember things about you for future visits. Here's a breakdown of their functions:

* **Remembering preferences:**  A website might use cookies to remember your preferred language, font size, or login information. This saves you time by not having to re-enter this information each time you visit.
* **Tracking your activity:**  Cookies can be used to track your browsing activity on a website, such as the pages you visit, products you view, and items you add to your cart. This information can be used for targeted advertising or website analytics.
* **Maintaining login sessions:**  When you log in to a website, a cookie might be used to store your session ID. This allows the website to identify you as a logged-in user and grant you access to restricted content or features.


## Getting Rid of Cookie Banners

Cookie banners are those pop-ups that appear when you visit a website, informing you about their use of cookies and asking for your consent. While they can be annoying, they are legally required in some regions to comply with user privacy regulations.  Here are some things to keep in mind:

* **You can't completely eliminate them:**  Cookie banners are often a legal requirement, so you can't completely avoid them. However, you can manage how you interact with them.
* **Read and understand:**  It's important to be informed about how websites use cookies. Take a moment to read the information presented in the banner before making a choice.
* **Manage your consent:**  Most cookie banners offer options like "Accept All," "Reject All," or "Manage Preferences." You can choose the level of cookie usage you're comfortable with.
* **Browser settings:**  Your web browser also offers settings to manage cookies. You can choose to block all cookies, delete existing cookies, or be prompted each time a website tries to store a cookie.




## Authentication Notes

**Concepts:**

* **Authentication vs. Authorization:**
    * Authentication: Verifying a user's identity (401 Unauthorized).
    * Authorization: Verifying a user's permissions (403 Forbidden).
* **Credentials:** Username/password combination used for login.
* **Stateful vs. Stateless Authentication:**
    * Stateful: Server stores session data (cookies).
    * Stateless: Server verifies tokens (JWTs) sent by the client.

**Sessions (Stateful Authentication):**

* **Flow:**
    1. User submits login credentials.
    2. Server validates credentials and creates a session.
    3. Server sends a cookie with a session ID.
    4. Subsequent requests include the cookie for verification.
    5. Server grants access based on valid session ID.
* **Features:**
    * Every user session stored server-side (memory, cache, database).
    * Identified by session ID (opaque reference).
    * Stored in a cookie (signed, with optional flags).
* **Security:**
    * Cookies can be signed (HMAC) to prevent tampering.
    * Flags like `HttpOnly` and `Secure` can enhance security.
    * CSRF (Cross-Site Request Forgery) is a concern (mitigated with CSRF tokens).

**Tokens (Stateless Authentication):**

* **Flow:**
    1. User submits login credentials.
    2. Server validates credentials and generates a token (JWT).
    3. Server sends the token back to the client.
    4. Client stores the token (local storage or session storage).
    5. Subsequent requests include the token for verification.
    6. Server verifies the token and grants access.
* **Features:**
    * Tokens are not stored server-side (stateless).
    * Signed with a secret to prevent tampering.
    * Can be opaque or self-contained (JWTs).
    * Typically sent in the Authorization header.
    * Can be refreshed when about to expire (refresh tokens).
* **JWT (JSON Web Token):**
    * Open standard for secure information exchange.
    * Compact, self-contained, URL-safe tokens.
    * Contains header, payload (claims), and signature (separated by dots).
    * Security concerns: XSS (client-side script injection) can steal token data.
* **Client Storage:**
    * JWTs can be stored in localStorage (persistent) or sessionStorage (cleared on close).

**Sessions vs. JWTs:**

| Feature          | Sessions                                 | JWTs                                         |
|------------------|-------------------------------------------|----------------------------------------------|
| Server Storage   | Stores session data                       | No session data stored                        |
| Scalability      | Less scalable (horizontal scaling)         | More scalable (easier horizontal scaling)     |
| CSRF             | Easier to mitigate (CSRF tokens)           | More vulnerable to XSS (mitigate with input san. |
| Data Staleness    | Data always in sync with server          | Data can become stale (out of sync with DB)   |
| Complexity       | Generally easier to set up and manage     | Requires more complex setup and management    |

**Choosing Between Sessions and JWTs:**

* Sessions: Better suited for web applications and websites where:
    * Server-side state management is preferred.
    * Data security is a top priority (less vulnerable to XSS).
    * Complex scaling is not required.
* JWTs: Better suited for SPAs (Single-Page Applications) and APIs where:
    * Scalability is a major concern.
    * Decoupled front-end and back-end architectures are desired.

**Security Considerations:**

* Regardless of the method:
    * Use HTTPS and configure security headers.
    * Implement XSS mitigation strategies.
    * Consider additional measures like IP verification, user agent verification, two-factor authentication, and API throttling.

**Resources:**

* YouTube video: 100% Stateless with JWT (JSON Web Token) by Hubert Sablonnière
* Articles:
    * Stop using JWT for sessions
    * Please Stop Using Local Storage [for JWT]
* StackOverflow:
    * Is it safe to store a JWT in sessionStorage?
    * Where to store JWT in browser? How to protect against CSRF?
