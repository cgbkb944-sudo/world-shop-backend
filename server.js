const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Временное хранилище в памяти (для примера; в продакшене лучше использовать базу данных)
let moderationData = {
  requests: [],
  refunds: []
};

// Эндпоинт для проверки работы сервера
app.get('/', (req, res) => {
  res.send('World TG Shop Backend is running!');
});

// Получить заявки
app.get('/api/moderation', (req, res) => {
  res.json(moderationData);
});

// Сохранить новые данные модерации/возвратов
app.post('/api/moderation', (req, res) => {
  const { requests, refunds } = req.body;
  if (requests) moderationData.requests = requests;
  if (refunds) moderationData.refunds = refunds;
  res.json({ success: true, message: 'Data saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
