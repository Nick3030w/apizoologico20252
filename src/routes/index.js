const express = require('express')
const app = express()
const port = 3000

app.get(
    '/', (req, res) => {
        res.send('Buenas tardes como estas espero que muy bien, yo estoy muy mal')
    }
);

app.listen(port, () => {
    console.log('La aplicación se está ejecutando por el puerto' + port)
});