const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/carouselPics', {
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('error', () => console.log (`error connecting to the database`));
db.once('open', () => console.log(`connected to the database`));

let pictureSchema = mongoose.Schema({
    _id: Number,
    pictures: Array
});

let Pictures = mongoose.model('Pictures', pictureSchema);

module.exports = Pictures;