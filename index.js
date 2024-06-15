const express = require('express');
const app = express();
const port = 3000;

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
            <h1>Hello, <a href="https://github.com/Muzammil803" target="__blank">Muzammil Shah</a>!</h1>
            <p>This is a simple HTML response from the Express server deployed on vercel.</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
