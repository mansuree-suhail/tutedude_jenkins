const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Handle form submission and forward to Flask backend
app.post('/submit', (req, res) => {
  const formData = req.body;

  // Forward data to backend Flask service (assumes backend runs on http://backend:5000)
  const fetch = require('node-fetch');

  fetch('http://127.0.0.1:5000/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      res.send(`Backend Response: ${JSON.stringify(data)}`);
    })
    .catch(err => {
      res.status(500).send('Error connecting to backend');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));
