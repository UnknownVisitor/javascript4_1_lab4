'use strict';

const express = require('express');
const app = express();

const PI = Math.PI;

app.get('/math/circle/:r', (req, res) => {
  
  const r = parseFloat(req.params.r);

  if (isNaN(r) || r <= 0) {
    return res.status(400).json({ error: "Promień musi być poprawną, dodatnią liczbą." });
  }

  const area = PI * r * r;

  const circumference = 2 * PI * r;

  const result = {
    "area": area.toFixed(2),
    "circumference": circumference.toFixed(2)
  };

  res.json(result);
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});