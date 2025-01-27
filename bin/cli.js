#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the app name from command line arguments
const appName = process.argv[2];

// Check if app name is provided
if (!appName) {
    console.error('Please provide a project name:');
    console.error('  npx create-next-entity-form-crafter-24 my-app');
    process.exit(1);
}

// Create the project directory
const projectPath = path.join(process.cwd(), appName);

// Check if directory already exists
if (fs.existsSync(projectPath)) {
    console.error(`Directory ${appName} already exists. Please choose a different name.`);
    process.exit(1);
}

// Define the package.json template
const packageTemplate = {
    scripts: {
        "dev": "next dev",
        "build": "next build --no-lint && pm2 restart all",
        "build:dev": "next build --no-lint",
        "start": "next start",
        "lint": "next lint",
        "lint:fix": "eslint . --fix",
        "format": "prettier --write .",
        "format:check": "prettier --check .",
        "postinstall": "rimraf bin"
    },
    dependencies: {
        "@aws-sdk/client-s3": "^3.645.0",
        "@aws-sdk/s3-request-presigner": "^3.645.0",
        "@emotion/react": "^11.13.3",
        "@emotion/styled": "^11.13.0",
        "@hookform/resolvers": "^3.9.0",
        "@mui/material": "^5.16.7",
        "@mui/x-data-grid": "^7.13.0",
        "@reduxjs/toolkit": "^2.2.7",
        "axios": "^1.7.7",
        "flatpickr": "^4.6.13",
        "formik": "^2.4.6",
        "js-cookie": "^3.0.5",
        "jsvectormap": "^1.6.0",
        "libphonenumber-js": "^1.11.7",
        "next": "^14.2.10",
        "qrcode": "^1.5.4",
        "react": "^18",
        "react-date-range": "^2.0.1",
        "react-datepicker": "^7.3.0",
        "react-dom": "^18",
        "react-google-recaptcha-v3": "^1.10.1",
        "react-hook-form": "^7.53.0",
        "react-icons": "^5.3.0",
        "react-phone-input-2": "^2.15.1",
        "react-redux": "^9.1.2",
        "react-select": "^5.8.1",
        "redux-persist": "^6.0.0",
        "sharp": "^0.33.5",
        "yup": "^1.4.0",
        "typescript": "5.7.3",
        "tailwindcss": "^3.3.0",
        "@types/tailwindcss": "^3.1.0",
        "postcss": "^8.4.31",
        "autoprefixer": "^10.4.16"
    },
    devDependencies: {
        "@types/js-cookie": "^3.0.6",
        "@types/node": "^18",
        "@types/react": "^18",
        "@types/react-datepicker": "^7.0.0",
        "@types/react-dom": "^18",
        "@types/react-google-recaptcha": "^2.1.9",
        "@typescript-eslint/eslint-plugin": "^7.0.0",
        "@typescript-eslint/parser": "^7.0.0",
        "autoprefixer": "^10.0.1",
        "eslint": "^8.57.0",
        "eslint-config-next": "^14.1.0",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-prettier": "^5.2.1",
        "eslint-plugin-react": "^7.35.0",
        "eslint-plugin-react-hooks": "^4.6.2",
        "postcss": "^8",
        "prettier": "^3.3.3",
        "prettier-plugin-tailwindcss": "^0.5.11",
        "tailwindcss": "^3.4.9",
        "typescript": "^5.0"
    }
};

try {
    // Create a temporary directory for cloning
    const tempDir = path.join(process.cwd(), '_temp_clone');
    
    // Clone the repository to temp directory
    console.log('Cloning the repository...');
    execSync(`git clone https://github.com/YashDexbytes/create-next-entity-form-crafter-24.git "${tempDir}"`);

    const sourceDir = path.join(tempDir);
    fs.mkdirSync(projectPath);
    
    // Copy all files from source to project directory
    execSync(`xcopy "${sourceDir}" "${projectPath}" /E /I /H /Y`);
    
    // Clean up temp directory
    fs.rmSync(tempDir, { recursive: true, force: true });

    // Remove the .git folder if it exists
    const gitFolder = path.join(projectPath, '.git');
    if (fs.existsSync(gitFolder)) {
        fs.rmSync(gitFolder, { recursive: true, force: true });
    }

    // Update package.json
    const packageJsonPath = path.join(projectPath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Update the package name and version
        packageJson.name = appName.toLowerCase().replace(/\s+/g, '-');
        packageJson.version = '1.0.0';
        
        // Add all scripts and dependencies
        packageJson.scripts = packageTemplate.scripts;
        packageJson.dependencies = packageTemplate.dependencies;
        packageJson.devDependencies = packageTemplate.devDependencies;
        
        // Remove npm-specific fields
        delete packageJson.bin;
        delete packageJson.repository;
        delete packageJson.bugs;
        delete packageJson.homepage;
        
        // Write the updated package.json
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    // Install dependencies
    console.log('Installing dependencies...');
    execSync(`cd "${projectPath}" && npm install`, { stdio: 'inherit' });

    console.log('\nSuccess! Your project has been created at', projectPath);
    console.log('\nInside that directory, you can run several commands:');
    console.log('\n  npm run dev');
    console.log('    Starts the development server.');
    console.log('\n  npm run build');
    console.log('    Builds the app for production.');
    console.log('\n  npm start');
    console.log('    Runs the built app in production mode.');
    console.log('\n  Import the .env file from the .env.example file and add your own values.');
    console.log('\nWe suggest that you begin by typing:');
    console.log(`\n  cd ${appName}`);
    console.log('  npm run dev\n');
    console.log('Happy coding!\n');

} catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
} 