# Next.js and Node.js Application with JWT Authentication

This is a full-stack application built with Next.js for the frontend and Node.js for the backend. It includes JWT authentication middleware and uses Prisma ORM for database operations. The frontend is built with Material UI for a responsive and modern user interface.

## Features

- **JWT Authentication**: Secure user authentication using JSON Web Tokens
- **Prisma ORM**: Type-safe database access with Prisma
- **Material UI**: Modern and responsive UI components for the frontend
- **Logging**: Winston logger with daily rotation for application logs
- **Environment Configuration**: Using dotenv for environment variable management

## Project Structure

```
/
├── client/                 # Next.js frontend application
│   ├── public/             # Static files like images and fonts
│   ├── app/                # Next.js app router with pages and routing
│   │   ├── components/     # Reusable React components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and libraries
│   │   ├── (pages)/        # Route groups for pages
│   │   │   └── [page]/     # Individual page directories
│   │   │       └── components/ # Page-specific components
│   │   ├── services/       # API service functions
│   │   └── styles/         # Global styles and theme configuration
│   ├── .env                # Environment variables for the client
│   ├── next.config.js      # Next.js configuration
│   └── package.json        # Frontend dependencies
├── server/                 # Node.js backend application
│   ├── prisma/             # Prisma ORM
│   │   ├── migrations/     # Database migrations
│   │   └── schema.prisma   # Database schema
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # JWT and request middleware
│   │   ├── models/         # Data models and validation
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic and external services
│   │   └── utils/          # Utility functions and helpers
│   ├── .env                # Environment variables for the server
│   ├── server.js           # Main server entry point
│   └── package.json        # Backend dependencies
│
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Set up server environment variables
```bash
cp .env.example .env
```
Edit the `.env` file with your database connection string and JWT secret.

4. Set up the database
```bash
npx prisma migrate dev --name init
```

5. Install client dependencies
```bash
cd ../client
npm install
```

6. Set up client environment variables
```bash
cp .env.example .env
```
Edit the `.env` file with your API URL.

### Running the Application

1. Start the server
```bash
cd server
npm start
```

2. In a new terminal, start the client
```bash
cd client
npm run dev
```

3. Open your browser and navigate to http://localhost:3000

## Dependencies

### Client Dependencies
- **Next.js (15.3.0)**: React framework for server-side rendering and static site generation
- **React (19.0.0)**: JavaScript library for building user interfaces
- **Material UI (7.0.2)**: React component library implementing Google's Material Design
- **Emotion**: CSS-in-JS library for styling components
  - @emotion/react (11.14.0)
  - @emotion/styled (11.14.0)
- **MUI Icons (7.0.2)**: Material Design icons for React

### Server Dependencies
- **Express (5.1.0)**: Web application framework for Node.js
- **Prisma Client (6.6.0)**: Auto-generated query builder for Node.js & TypeScript
- **JSON Web Token (9.0.2)**: Implementation of JSON Web Tokens for authentication
- **Winston (3.17.0)**: Logging library for Node.js
- **Winston Daily Rotate File (5.0.0)**: Transport for winston that rotates files daily
- **CORS (2.8.5)**: Express middleware for enabling CORS
- **Dotenv (16.5.0)**: Module to load environment variables from .env file
