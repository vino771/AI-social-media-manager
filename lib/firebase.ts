import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Check if all required environment variables are present
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !import.meta.env[envVar] || import.meta.env[envVar] === 'your_api_key_here' || import.meta.env[envVar] === 'your_project_id' || import.meta.env[envVar] === 'your_sender_id');

if (missingEnvVars.length > 0) {
  console.warn('Using demo Firebase configuration. For production, please set up your Firebase project.');
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
let app;
let auth;
let db;

try {
  app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization failed:', error);
  console.error('Please ensure your Firebase configuration is correct in the .env file');
}

export { auth, db };

// Google Auth Provider
let googleProvider;
if (auth) {
  googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });
}

// Auth functions
export const signInWithGoogle = () => {
  if (!auth || !googleProvider) {
    throw new Error('Firebase is not properly initialized. Please check your configuration.');
  }
  return signInWithPopup(auth, googleProvider);
};

export const signOutUser = () => {
  if (!auth) {
    throw new Error('Firebase is not properly initialized. Please check your configuration.');
  }
  return signOut(auth);
};

// Auth state observer
export const onAuthStateChangedListener = (callback: (user: User | null) => void) => {
  if (!auth) {
    console.error('Firebase Auth is not initialized');
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
};

export default app;