const http = require('http');

const server = http.createServer((req, res) => {
    res.write(`<iframe width="420" height="315"
                src="https://www.youtube.com/watch?v=5qm8PH4xAss">
               </iframe>`
            )
    res.end()
})

server.listen(8585)