# Node-Express on Vercel Free Setup Boilerplate

This project demonstrates how to create a simple Express server and deploy it to Vercel for free. Follow the steps below to set up the project.

## Prerequisites

- Node.js installed on your machine
- Vercel account (sign up at [vercel.com](https://vercel.com))

## Step 1: Initialize Node.js Project

1. Create a new directory for your project and navigate into it:
    ```sh
    mkdir node-express-vercel
    cd node-express-vercel
    ```

2. Initialize a new Node.js project:
    ```sh
    npm init -y
    ```

## Step 2: Install Express

1. Install the Express package:
    ```sh
    npm install express
    ```

## Step 3: Create Express Server

1. Create a file named `index.js` in the project directory and add the following code:

    ```js
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 3000;

    // Define a route that sends an HTML response
    app.get('/', (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Simple Express Server</title>
            </head>
            <body>
                <h1>Hello, World!</h1>
                <p>This is a simple HTML response from the Express server.</p>
            </body>
            </html>
        `);
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
    ```

## Step 4: Create `vercel.json` Configuration

1. Create a file named `vercel.json` in the root directory of your project with the following content:

    ```json
    {
        "version": 2,
        "builds": [
            {
                "src": "./index.js",
                "use": "@vercel/node"
            }
        ],
        "routes": [
            {
                "src": "/(.*)",
                "dest": "/"
            }
        ]
    }
    ```

    ### Explanation:
    - `version`: Specifies the Vercel platform version.
    - `builds`: Defines the build configuration for your project. In this case, it specifies that `index.js` should be built using the `@vercel/node` builder.
    - `routes`: Defines the routing rules. The provided rule routes all incoming requests to the root of the application.

## Step 5: Deploy to Vercel

1. Install the Vercel CLI globally if you haven't already:
    ```sh
    npm install -g vercel
    ```

2. Log in to your Vercel account:
    ```sh
    vercel login
    ```

3. Deploy your project to Vercel:
    ```sh
    vercel
    ```

    Follow the prompts to link or create a new Vercel project.

## Step 6: View Your Deployed Application

Once the deployment is complete, Vercel will provide you with a URL where your application is live. Open the URL in a browser to see your Express server running on Vercel.

## Conclusion

You have successfully created a simple Express server and deployed it to Vercel. This setup is ideal for quick prototypes, small projects, and learning purposes. For more complex applications, you may need to adjust the configuration and structure accordingly.
