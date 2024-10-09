const fetch = require('node-fetch'); // If you're using Node.js

const apiUrl = 'https://free.churchless.tech/v1/chat/completions';
const apiKey = '<YOUR_API_KEY>'; // Replace with your API key

const data = {
  model: 'gpt-3.5-turbo',  // You can specify the model if needed
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the capital of France?' }
  ],
  max_tokens: 100,  // Max tokens to generate
  temperature: 0.7  // Controls randomness
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    console.log('Response:', result.choices[0].message.content);
  })
  .catch(error => {
    console.error('Error:', error);
  });
