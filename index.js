'use strict';

const express = require('express');
const app = express();

const PI = Math.PI;

// Obliczanie Pola i Obwodu Koła
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

// Obliczanie Pola i Obwodu Prostokąta
app.get('/math/rectangle/:width/:height', (req, res) => {

  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  // Walidacja: Sprawdzenie, czy oba parametry są poprawnymi, dodatnimi liczbami
  if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
    return res.status(400).json({ error: "Szerokość i wysokość muszą być poprawnymi, dodatnimi liczbami." });
  }

  const area = width * height;

  const perimeter = 2 * (width + height);

  // Formatowanie i zwracanie odpowiedzi
  const result = {
    "area": area, 
    "perimeter": perimeter
  };

  res.json(result);

});



const PORT = process.env.PORT || 5069;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});