const express = require ('express');
const parser = require ('body-parser');
const router = require ('./router');

const port = 3003;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/api/carousel/pics', router);

app.listen (port, ()=> console.log(`connected to port ${port}`));