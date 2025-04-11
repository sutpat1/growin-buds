# Growin' Buds
A social media application for gardening enthusiasts built with **React Native** and **Expo** to connect plant lovers, track plant care, and share gardening knowledge.

## 🌱 Live Demo
[Try Growin' Buds](https://growin-buds-demo.example.com/) <!-- Replace with your actual deployment link when available -->

---

## 🚀 Features
- 👤 **User Authentication**: Create accounts, log in securely, and personalize your gardening experience.
- 🌿 **Plant Profiles**: Create and manage detailed profiles for each of your plants.
- ✅ **Task Management**: Track daily plant care tasks with a built-in checklist system.
- 🔍 **Search Functionality**: Find gardening tips, plant care information, and articles.
- 👥 **Social Features**: Connect with friends, share progress, and build a community of fellow gardeners.
- 📱 **Responsive Design**: Works seamlessly on both iOS and Android platforms.
- 🏆 **Achievement System**: Earn points by completing plant care tasks.

---

## 🛠️ Tech Stack
- **Framework**: React Native, Expo
- **Navigation**: React Navigation (Stack & Tab Navigation)
- **UI Components**: Native Base, Expo Vector Icons
- **State Management**: React Hooks
- **Form Management**: React Native Forms

---

## 📁 Folder Structure
<pre lang="markdown">
growin-buds/
  ├── assets/                # Images and app resources
  ├── screens/               # Application screens
  │   ├── Welcome.js         # Welcome/landing page
  │   ├── Login.js           # User login
  │   ├── SignUp.js          # New user registration
  │   ├── Home.js            # Dashboard with daily tasks
  │   ├── PlantProfile.js    # Individual plant details
  │   ├── CreatePlantProfile.js # Add new plants
  │   ├── UserProfile.js     # User information
  │   ├── Friends.js         # Social connections
  │   └── Search.js          # Search functionality
  ├── App.js                 # Main application component
  ├── app.json               # Expo configuration
  ├── babel.config.js        # Babel configuration
  └── package.json           # Dependencies and scripts
</pre>

---

## 🚀 Getting Started

**Prerequisites**

* Node.js (v12.0 or higher)
* npm or yarn
* Expo CLI

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/growin-buds.git
   cd growin-buds

2. Install dependencies
   ```bashnpm install
    # or with yarn
   ```yarn install

Start the development server
   ```bashnpm start
   # or with yarn
   ```yarn start
   # or with expo
   ```expo start

Run on a device or emulator

Scan the QR code with the Expo Go app (Android) or Camera app (iOS)
Press 'a' for Android emulator
Press 'i' for iOS simulator
