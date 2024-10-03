require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/dbConnect');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
