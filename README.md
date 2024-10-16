# Node-task3
CRUD-API task from RS_School Node.js course


  "scripts": 
    // Start the application in development mode using nodemon
    // It watches for changes in TypeScript files and executes ts-node
    "start": "nodemon --watch 'src/**' --ext 'ts' --ignore 'src/**/*.spec.ts' --exec 'ts-node src/index.ts'",
    
    // Start the application in development mode with environment variables
    // Uses ts-node-dev with --respawn to handle child processes
    "start:dev": "cross-env NODE_ENV=development dotenv -e .env.development ts-node-dev --respawn src/index.ts",
    
    // Run tests using Jest in test mode with environment variables
    "start:test": "cross-env NODE_ENV=test dotenv -e .env.test jest",
    
    // Start the production application after building it
    // Uses environment variables from .env.production
    "start:prod": "cross-env NODE_ENV=production dotenv -e .env.production npm run build && node dist/index.js",
    
    // Build the application for development using webpack.dev.js configuration
    "build:dev": "webpack --mode=development --config webpack.dev.js",
    
    // Build the application for production using webpack.prod.js configuration
    "build": "webpack --mode=production --config webpack.prod.js",
    
    // Lint TypeScript files using ESLint
    "lint": "eslint 'src/**/*.ts'",
    
    // Fix linting issues automatically in TypeScript files
    "lint:fix": "eslint --fix 'src/**/*.ts'",
    
    // Run tests using Jest in test mode
    "test": "cross-env NODE_ENV=test jest"

