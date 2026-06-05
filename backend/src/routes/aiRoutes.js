const express = require('express');
const axios = require('axios'); // Make sure you have axios installed: npm install axios
const router = express.Router();

// Route: POST /api/ai/chat
router.post('/ai/chat', async (req, res) => {
    try {
        const { message, historical_data } = req.body;

        // Forward the request to our Python Flask Microservice
        const pythonServerUrl = 'http://localhost:5001/api/ai/chat';
        
        const flaskResponse = await axios.post(pythonServerUrl, {
            message: message,
            historical_data: historical_data || []
        });

        // Send the Python bot's response back to the React frontend
        res.status(200).json(flaskResponse.data);

    } catch (error) {
        console.error("AI Service Error:", error.message);
        res.status(500).json({ error: "AI Microservice is currently offline." });
    }
});

module.exports = router;