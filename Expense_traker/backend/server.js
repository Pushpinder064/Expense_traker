import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Updated to use express.json() directly

// Connect to MongoDB
const dbURI = "mongodb+srv://spushpinder064:NsHaGDRggcLAZsRM@cluster0.txjovdj.mongodb.net/";
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));

// Define Expense schema
const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);

// API routes
app.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/expenses', async (req, res) => {
    const { description, amount } = req.body;

    try {
        if (!description || !amount) {
            return res.status(400).json({ message: 'Description and amount are required.' });
        }

        const newExpense = new Expense({ description, amount });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        console.error('Error saving expense:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
