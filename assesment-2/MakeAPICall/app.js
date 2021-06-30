const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000


app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))