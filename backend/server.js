const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    const customer = {
        id: 1,
        first_name: 'John',
        last_name: 'Smith'
    }
})

//Connect to MongoDB



const port = 5000;
app.listen(port, () => { console.log(`The server is on port ${port}`) });