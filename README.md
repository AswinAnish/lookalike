# Our Learning Platform - E-Learning Application

A modern React-based e-learning platform with user authentication and course management features.

## Project Overview

This project features a complete authentication system with:
- User login and logout functionality
- Session persistence using localStorage
- User database with validation
- Welcome page with personalized greeting
- Responsive UI with modern styling

## Project Structure

```
src/
├── components/
│   ├── LoginPage.js       # Login form component
│   └── HomePage.js        # Welcome/home page component
├── styles/
│   ├── LoginPage.css      # Login page styling
│   └── HomePage.css       # Home page styling
├── db/
│   ├── users.json         # User database with credentials
│   └── validation.js      # User validation functions
├── App.js                 # Main app component
└── index.js               # React entry point
```

## Test Credentials

Use the following credentials to login:

- **Username:** `aswin`
- **Password:** `aswin@123`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Features

### Login Page
- Username and password input fields
- Form validation
- Error message display
- Loading state during authentication
- Links for sign up and password recovery

### Home Page
- Personalized welcome message with username
- Session persistence - user stays logged in after page refresh
- Logout button to clear session

### Validation System
- User credentials stored in `src/db/users.json`
- Validation functions in `src/db/validation.js`:
  - `validateUser(username, password)` - Authenticates user
  - `userExists(username)` - Checks if username exists
  - `getUserByUsername(username)` - Retrieves user data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Use test credentials to login:
   - Username: `aswin`
   - Password: `aswin@123`

## Dependencies

- React 19.2.0
- React DOM 19.2.0
- React Scripts 5.0.1
- Testing Library for React

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
