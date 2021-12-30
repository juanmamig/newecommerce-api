const mongoose = require('mongoose');
const url = 'mongodb+srv://juanma123:juanma123@cluster0.xt2ut.mongodb.net/newecommerce?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true,
});
