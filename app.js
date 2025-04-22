const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');
const db = require('./config/db'); 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', schoolRoutes);

const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
