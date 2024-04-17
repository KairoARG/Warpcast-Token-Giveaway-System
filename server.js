const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/warpcast-token-giveaway', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schema and model for daily token allocation
const dailyAllocationSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  walletAddress: String,
  amountRedeemed: Number,
  txHash: String,
  tokenContractAddress: String,
});
const DailyAllocation = mongoose.model('DailyAllocation', dailyAllocationSchema);

// Routes
app.post('/checkFollowAndRecast/:userId', async (req, res) => {
  try {
    // Add logic to check if user has followed and recasted
    const userId = req.params.userId;
    // Simulate data for now
    const userFollowedAndRecasted = true;
    if (userFollowedAndRecasted) {
      res.json({ message: 'User has followed and recasted.' });
    } else {
      res.json({ message: 'User has not followed and recasted.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add more routes for other API endpoints

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
