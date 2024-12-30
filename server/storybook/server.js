const express = require('express');
const app = express();

app.use('/react', express.static('./react'));
app.use('/vue', express.static('./vue'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Xsolla-ZK UI-Kit</title>
        <meta name="robots" content="noindex,nofollow">
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; padding-top: 50px;">
        <h1>Welcome to Xsolla-ZK UI-Kit!</h1>
        <p>Select one of the storybook routes below:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin: 16px 0;"><a href="/react" style="text-decoration: none; color: blue;">React UI Kit</a></li>
          <li style="margin: 16px 0;"><a href="/vue" style="text-decoration: none; color: green;">Vue UI Kit</a></li>
        </ul>
      </body>
    </html>
  `);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});
