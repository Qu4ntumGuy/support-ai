function Chat({ chatId }) {
  const id = chatId;
  //   console.log(id);

  const text =
    'Yes, you can easily configure Firebase in your Next.js project. Here\'s a comprehensive guide, including best practices and important considerations:\n\n**1. Project Setup**\n\n* **Firebase Project:**\n    * Create a Firebase project in the Firebase console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).\n    * Enable the Firebase services you need (e.g., Authentication, Realtime Database, Cloud Firestore, Cloud Functions).\n* **Next.js Project:**\n    * If you don\'t have one, create a new Next.js project: `npx create-next-app@latest my-nextjs-app`\n    * Ensure you have Node.js and npm (or yarn) installed.\n\n**2. Install Firebase SDK**\n\n```bash\nnpm install firebase\n```\n\n**3. Initialize Firebase**\n\n* **Create a Firebase Configuration File:**\n   - In your Next.js project\'s root directory, create a file named `firebase.config.js` (or `.ts`).\n   - Add your Firebase configuration details from the Firebase console. \n   - Example:\n\n    ```javascript\n    import { initializeApp } from \'firebase/app\';\n\n    const firebaseConfig = {\n      apiKey: "YOUR_API_KEY",\n      authDomain: "YOUR_AUTH_DOMAIN",\n      projectId: "YOUR_PROJECT_ID",\n      storageBucket: "YOUR_STORAGE_BUCKET",\n      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",\n      appId: "YOUR_APP_ID",\n      databaseURL: "YOUR_DATABASE_URL" // If using Realtime Database\n    };\n\n    const app = initializeApp(firebaseConfig);\n\n    export default app; // Optional - export for access in other files\n    ```\n\n* **Import and Use Firebase:**\n    - In any component that needs to use Firebase, import the necessary modules:\n\n    ```javascript\n    import { getAuth, signInWithEmailAndPassword } from \'firebase/auth\';\n    import { getFirestore, collection, addDoc } from \'firebase/firestore\'; // If using Firestore\n\n    // ... Your component code\n    ```\n\n    - Access Firebase services:\n\n    ```javascript\n    const auth = getAuth();\n    const db = getFirestore(app); // If using Firestore\n\n    // ... Authentication, database operations, etc.\n    ```\n\n**4. Authentication (Optional)**\n\n* **Setup Authentication:**\n   - In your Firebase console, go to "Authentication" and configure your preferred authentication methods (e.g., email/password, Google Sign-In).\n\n* **Sign In/Out:**\n\n    ```javascript\n    // Example for email/password sign-in\n    const handleSignIn = async (email, password) => {\n      try {\n        const userCredential = await signInWithEmailAndPassword(auth, email, password);\n        const user = userCredential.user;\n        // ... (handle user sign-in)\n      } catch (error) {\n        // ... (handle errors)\n      }\n    };\n    ```\n\n**5. Realtime Database or Cloud Firestore (Optional)**\n\n* **Data Storage:**\n   - Choose the data storage solution that suits your needs:\n     * **Realtime Database:** A NoSQL database that\'s ideal for real-time applications.\n     * **Cloud Firestore:** A more scalable NoSQL database with richer features (including offline capabilities).\n\n* **Database Operations:**\n\n    ```javascript\n    // Example using Firestore\n    const handleAddData = async (data) => {\n      try {\n        const docRef = await addDoc(collection(db, "your-collection"), data);\n        // ... (handle data insertion)\n      } catch (error) {\n        // ... (handle errors)\n      }\n    };\n    ```\n\n**6. Best Practices**\n\n* **Environment Variables:**\n    - Never hardcode your Firebase configuration (API keys, etc.) directly in your code.\n    - Use environment variables for secure storage (e.g., `.env` file):\n\n    ```bash\n    # Create a .env file in the root of your project\n    NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY\n    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN\n    # ... other Firebase configuration values\n    ```\n\n    - Then, in your `firebase.config.js` file:\n\n    ```javascript\n    import { initializeApp } from \'firebase/app\';\n\n    const firebaseConfig = {\n      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,\n      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,\n      // ... other values\n    };\n\n    // ... rest of your configuration\n    ```\n\n* **Data Fetching:**\n    - Use server-side rendering (SSR) to fetch data from Firebase in your pages or components. This is generally recommended for SEO and better performance.\n    - Use `getServerSideProps` for data fetched on each request.\n    - Use `getStaticProps` for data fetched only once at build time (for static pages).\n\n* **Error Handling:**\n    - Implement comprehensive error handling around Firebase operations to ensure a robust user experience.\n\n**Example: Server-Side Rendering with Firestore**\n\n```javascript\nimport { getFirestore, collection, getDocs } from \'firebase/firestore\';\nimport { getAuth } from \'firebase/auth\';\nimport app from \'../firebase.config\';\n\nexport async function getServerSideProps() {\n  const db = getFirestore(app);\n  const auth = getAuth(app);\n\n  try {\n    const querySnapshot = await getDocs(collection(db, "your-collection"));\n    const data = querySnapshot.docs.map((doc) => ({\n      id: doc.id,\n      ...doc.data(),\n    }));\n\n    return { props: { data } };\n  } catch (error) {\n    // Handle errors\n    console.error("Error fetching data:", error);\n    return { props: { error: \'Failed to fetch data\' } };\n  }\n}\n\n// ... Your page component using fetched data \n```\n\n**Additional Notes:**\n\n* **Storage:** For file uploads, use Firebase Storage.\n* **Cloud Functions:** Use Firebase Cloud Functions for backend logic and server-side tasks.\n* **Messaging:** Use Firebase Cloud Messaging for push notifications.\n* **Analytics:** Track user behavior and understand usage patterns with Firebase Analytics.\n\nLet me know if you have any other questions or need help with specific Firebase features.';

  function formatFirebaseSetupGuide(input) {
    // Replace specific markdown-like patterns with HTML tags
    let formattedText = input
      .replace(/^##\s(.+)$/gm, "<h2>$1</h2>") // Convert ## headers to <h2>
      .replace(/^###\s(.+)$/gm, "<h3>$1</h3>") // Convert ### headers to <h3>
      .replace(/^\*\*\s(.+):\s*\*\*/gm, "<strong>$1:</strong>") // Convert **Text:** to <strong>Text:</strong>
      .replace(/^\* (.+)$/gm, "<li>$1</li>") // Convert * items to <li>
      .replace(
        /^```(javascript)?$/gm,
        '<pre><code class="language-javascript">'
      ) // Convert ```javascript to <pre><code>
      .replace(/^```$/gm, "</code></pre>") // Convert ``` to </code></pre>
      .replace(
        /\[([^\]]+)\]\(([^\)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      ) // Convert [text](url) to <a href="url">text</a>
      .replace(/\n\n/g, "</p><p>") // Convert double newlines to paragraph breaks
      .replace(/\n/g, "<br/>"); // Convert single newlines to <br/>

    // Wrap the entire text in a <div>
    formattedText = `<div>${formattedText}</div>`;

    // Return the formatted HTML
    return formattedText;
  }

  console.log(formatFirebaseSetupGuide(text));

  return <div className="flex-1">{text}</div>;
}

export default Chat;
