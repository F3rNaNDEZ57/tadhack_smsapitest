const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/sendSMS', async (req, res) => {
  const { message, numbers } = req.body;
  try {
    const response = await axios.post('https://api.dialog.lk/sms/send', {
      message: message,
      destinationAddresses: numbers,
      password: "ade49a19b550a168415764f273f49fc5",
      applicationId: "APP_064990"
    });
    res.json({ success: true, response: response.data });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ success: false, error: "Unable to send SMS" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
