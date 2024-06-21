const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on AWS Lambda!' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports.handler = serverless(app);