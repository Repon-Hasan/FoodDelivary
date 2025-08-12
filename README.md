# 🍔 FoodDelivery App

A modern food ordering and delivery web application built with **React** and **Firebase**. It allows users to browse food menus, place orders, and track deliveries with a clean and animated user interface. Includes secure user authentication, order management, protected routes, theme toggling, and responsive design for both desktop and mobile.

🔗 **Live Demo:** [https://assignment-9-3f65f.web.app/](https://assignment-9-3f65f.web.app/)

---

## 🚀 Features

- 🔐 **User Authentication**
  - Email/password sign-up and login
  - Google OAuth login via Firebase
  - Firebase Authentication and Firestore

- 📋 **Dynamic Menu**
  - Browse featured dishes, categories, and search/filter options
  - Responsive menu grid with pricing and descriptions

- 🛒 **Ordering System**
  - Add to cart, update quantities, and place orders
  - Orders saved in Firestore under user accounts

- 🔒 **Protected Routes**
  - Only authenticated users can place/view orders

- 🌓 **Dark/Light Mode**
  - Toggle theme using React Context API

- ✨ **Animated UI**
  - Smooth UI animations using Lottie and React Awesome Reveal

---

## 🛠 Tech Stack

| Category       | Technology                            |
|----------------|----------------------------------------|
| Frontend       | React, React Router               |
| Backend        | Firebase Firestore                     |
| Auth           | Firebase Authentication                |
| Styling        | Tailwind CSS / CSS Modules             |
| Animations     | Lottie, React Awesome Reveal           |
| Deployment     | Firebase Hosting or Vercel/Netlify     |

---

## 📁 Folder Structure

FoodDelivery/
├── public/
├── src/
│ ├── assets/ # Images, Lottie files, icons
│ ├── components/ # Reusable UI components
│ ├── contexts/ # Auth and Theme context
│ ├── pages/ # Route-based pages
│ ├── services/ # Firebase configs & Firestore logic
│ ├── App.jsx # Root component
│ └── main.jsx # React entry point
├── .env.local # Firebase API Keys (ignored in .git)
├── package.json
└── README.md


---

## 📦 Installation

### Requirements

- Node.js (v14+)
- npm or Yarn

---

### Setup

1. **Clone the Repository**

```bash
git clone https://github.com/Repon-Hasan/FoodDelivary
cd FoodDelivery


Install Dependencies
bash
npm install
# or
yarn install



Add Environment Variables

Create a .env.local file in the root directory and fill it with your Firebase config:
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id


Start Development Server
npm run dev
# or
yarn dev



🌍 Deployment
To deploy using Firebase Hosting:

bash

npm run build
firebase login
firebase init
firebase deploy

## 👨‍🍳 Author

**Repon Hasan**  
GitHub: [@Repon-Hasan](https://github.com/Repon-Hasan)

