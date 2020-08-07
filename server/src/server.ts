import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const users = [
    { name: 'Jeziel', age: 19 },
    { name: 'Fábio', age: 19 },
  ];

  return res.json(req.body);
})

app.listen(3333);