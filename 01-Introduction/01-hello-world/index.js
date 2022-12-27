console.log('Hello world')

// create fist basic api
const http = require('http')

// define the host and port
const host = '127.0.0.1'
const port = '3000'

// create server using http req
const server = http.createServer((req, res) => {
    // define the response state
    res.statusCode = 200
    // define the response header
    res.setHeader('Content-Type', 'text/plain')
    // define the response body
    res.end('Hello World from http req')
})

// start server
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})