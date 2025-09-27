# AI-Powered Social Media Management Platform

A comprehensive social media management platform that uses AI to help users create, schedule, and optimize content across multiple social platforms.

## Features

- 🔐 **Firebase Authentication** - Secure Google OAuth and email/password authentication
- 🤖 **AI Content Generation** - Intelligent chatbot for personalized content creation
- 📅 **Smart Scheduling** - Interactive calendar interface for planning posts
- 📊 **Analytics Dashboard** - Comprehensive performance tracking and insights
- 🔗 **Multi-Platform Integration** - Connect Twitter, LinkedIn, and Instagram accounts
- ⚡ **Automated Posting** - Schedule and publish content automatically
- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Icons**: Lucide React
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication and Firestore enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd social-media-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and add Google as a sign-in provider
   - Enable Firestore Database
   - Copy your Firebase configuration

4. Configure environment variables:
```bash
cp .env.example .env
```
Fill in your Firebase configuration in the `.env` file.

5. Start the development server:
```bash
npm run dev
```

### Firebase Setup

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Follow the setup wizard

2. **Enable Authentication**:
   - Go to Authentication > Sign-in method
   - Enable Google provider
   - Add your domain to authorized domains

3. **Enable Firestore**:
   - Go to Firestore Database
   - Create database in test mode
   - Set up security rules as needed

4. **Get Configuration**:
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Copy the Firebase configuration object

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Dashboard.tsx   # Main dashboard
│   ├── ContentCreator.tsx # AI content generation
│   ├── Calendar.tsx    # Scheduling interface
│   ├── Analytics.tsx   # Performance metrics
│   ├── Settings.tsx    # User preferences
│   ├── AuthModal.tsx   # Authentication modal
│   └── LandingPage.tsx # Landing page for unauthenticated users
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── lib/               # Utilities and configurations
│   └── firebase.ts    # Firebase configuration
├── App.tsx           # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Authentication Flow

1. **Landing Page**: Unauthenticated users see a beautiful landing page
2. **Sign In Modal**: Users can sign in with Google or email/password
3. **Protected Routes**: Authenticated users access the full platform
4. **Session Management**: Firebase handles user sessions automatically

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.