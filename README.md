# RealEstateMart Application

![Platform](https://img.shields.io/badge/platform-Web%20|%20MERN-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Environment Variables](#environment-variables)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**RealEstateMart** is a modern real estate marketplace built with the **MERN stack** (MongoDB, Express, React, Node.js) that enables users to buy, sell, and rent properties with ease. The platform integrates **JWT-based authentication** and **Google OAuth** to provide secure and seamless access for users. The app supports real-time **CRUD operations** for property management and offers advanced search functionalities to filter listings based on user preferences.

The platform is designed to deliver a smooth and intuitive experience across both desktop and mobile devices.

**Live Demo**: [RealEstateMart Application](https://realestatemart.up.railway.app/)

## Features

- **JWT-Based Authentication & Google OAuth**: Provides secure login via JSON Web Tokens and Google OAuth for effortless user authentication.
- **Property Management**: Users can create, update, delete, and view property listings in real time.
- **Advanced Search Functionality**: Users can search for properties based on location, price, type, and other custom filters.
- **Responsive Design**: The platform is fully responsive, offering a great user experience on both mobile and desktop devices.
- **Real-Time CRUD Operations**: Allows users to manage properties efficiently with real-time updates.
- **User Profiles**: Users can manage their accounts, view their properties, and track their interactions.

## Screenshots

| ![Homepage](https://github.com/user-attachments/assets/6b98b4dc-57df-410e-8fbd-6108dd0921d5)| ![Property Details](https://github.com/user-attachments/assets/ce73ef5d-d856-446e-b66e-052e7fa2725c)|
|:---------------------------------------------:|:----------------------------------------------:|
| *Homepage*                                   | *Property Details*                            |

| ![Dashboard](https://github.com/user-attachments/assets/4bd1953e-3ff0-4073-92e9-82e2adc79667)| ![Add Property]![image](https://github.com/user-attachments/assets/0a0a43f3-7265-4854-aaa2-3e1221b4afe5)|
|:------------------------------------------------:|:--------------------------------------------:|
|  *User Dashboard*                                | *Add Property Interface*                       |

## Installation

### Prerequisites

- **Node.js**: Install from the [official website](https://nodejs.org/).
- **MongoDB**: Set up locally or use MongoDB Atlas.
- **Firebase**: Set up Firebase for Google OAuth authentication.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/naumanbutt2002/realestatemart.git
2. Navigate to the project directory:
   ```bash
   cd realestatemart
3. Install server dependencies:
   ```bash
   npm install
4. Navigate to the client folder and install client dependencies:
   ```bash
   cd client
   npm install
5. Set up environment variables (See [Environment Variables](#environment-variables) section below).
6. Run the app:
   ```bash
   # Start the server
   npm run dev
   # In a new terminal, start the client
   cd client
   
## Usage
### Launching the App:

- Once the application is installed and running, you can access it by navigating to http://localhost:3000/ in your browser.
### Features:

- **Home Page**: View all available properties for sale, rent, or purchase.
- **Property Details**: Detailed view of each property with additional features, including location, price, and images.
- **User Dashboard**: Manage property listings, view saved properties, and update personal information.
- **Search**: Filter properties by location, price, and other attributes.
- **Authentication**: Log in via Google OAuth or JWT-based authentication to access exclusive features.

## Technologies Used
- **MongoDB**: NoSQL database for storing posts, users, and comments.
- **Express.js**: Backend framework to handle server-side logic.
- **React.js**: Frontend framework to create the user interface.
- **Node.js**: JavaScript runtime for server-side programming.
- **Redux**: State management for React.
- **Firebase**: For Google OAuth authentication.
- **JWT**: Token-based authentication for secure login.
  
## Architecture
RealEstateMart employs a component-based architecture. The backend follows REST principles, while the frontend is built with reusable React components. Redux is used for state management, ensuring scalable and maintainable code.
 
### Folder Structure
   ```bash
client/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Pages (Home, PostDetails, etc.)
│   ├── redux/           # Redux actions, reducers
│   ├── utils/           # Utility functions and services
│   └── App.jsx           # Main app component

server/
├── .env/              # Env files for MongoDB, JWT
├── controllers/         # Express controllers for handling routes
├── models/              # Mongoose models (User, Post, Comment)
├── routes/              # Express routes (Auth, Posts, Comments)
└── index.js            # Main index file

```
## Environment Variables
To run this application, you need to set up two .env files with the following variables:
### Add .env file in the root of devnblog/ with variables:
   ```bash
MONGO= 'Your MONGODB connection string'
JWT_SECRET='Any type of letters or keys of your choice'
```
### Add .env file in devnblog/client/ with variables:
   ```bash
VITE_FIREBASE_API_KEY="Your Firebase API Key"
```
### External Services Setup
- Set up a MongoDB database either locally or online via [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database).
- Create a Firebase Account [here](https://firebase.google.com/).
- Create a new project on Google Cloud Platform for Google OAuth integration [here](https://console.cloud.google.com).



## Roadmap
- - [x] Initial release with core features.
- - [x] Add Google OAuth authentication.
- - [x] Add image upload functionality for properties.
- - [ ] Implement advanced search filters..
- - [ ] Integrate real-time chat functionality between buyers and sellers.
- - [ ] Release version 1.0.

## Contributing
Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a new branch ('**git checkout -b feature-branch**').
3. Make your changes.
4. Commit your changes ('**git commit -m 'Add some feature'**').
5. Push to the branch ('**git push origin feature-branch**').
6. Open a pull request.

Please ensure all contributions align with the Clean Architecture principles used in this project.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See LICENSE for more information.

## Contact
Muhammad Nauman</br>
naumanbutt2002@gmail.com</br>
[Linkedin](https://www.linkedin.com/in/muhammad-nauman-3746b718a//) | [Instagram](https://www.instagram.com/naumanbutt2002/)

You can also follow my GitHub Profile to stay updated about my latest projects: [Github](https://github.com/naumanbutt2002)

