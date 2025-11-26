const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Profile</title>
        <style>
            /* This CSS centers everything and adds the colors */
            body {
                background-color: #282c34; /* Dark background */
                color: white;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .card {
                background-color: #3b404e; /* Slightly lighter card */
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.3);
                text-align: center;
                max-width: 500px;
                width: 90%;
                border-top: 6px solid #61dafb; /* Blue accent line */
            }
            h1 {
                margin: 0;
                font-size: 2.2rem;
            }
            .section {
                color: #abb2bf;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 0.9rem;
                margin-top: 10px;
                margin-bottom: 30px;
            }
            .quote-box {
                background-color: #282c34;
                padding: 20px;
                border-radius: 8px;
                font-style: italic;
                line-height: 1.6;
            }
            .author {
                display: block;
                margin-top: 10px;
                font-weight: bold;
                font-style: normal;
                color: #61dafb;
            }
        </style>
    </head>
    <body>

        <div class="card">
            <h1>Vladimyr Custodio</h1>
            <div class="section">BSIT - BA - 4102</div>
            
            <div class="quote-box">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
                <span class="author">- Winston Churchill</span>
            </div>
        </div>

    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});