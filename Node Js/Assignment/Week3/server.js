const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/teksti.txt') {
        const filePath = path.join(__dirname, 'teksti.txt');
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Content-Disposition': 'attachment; filename="teksti.txt"'
        });
        const StreamTeksti = fs.createReadStream(filePath);
        StreamTeksti.pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Serveri po dëgjon në http://localhost:${PORT}`);
});