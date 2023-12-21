const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/home4`));

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/index.html`);
});

app.listen(3001, ()=>{

    console.log('Server online');
});
