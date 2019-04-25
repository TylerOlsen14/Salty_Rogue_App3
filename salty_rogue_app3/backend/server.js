const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const clientRoutes = express.Router();
const PORT = 4000;
// const URL = 'mongodb+srv://Tucker:Tucker@cluster0-tihhu.mongodb.net/Clients?retryWrites=true'
const URL = "mongodb://Tucker:Tucker@cluster0-shard-00-00-tihhu.mongodb.net:27017,cluster0-shard-00-01-tihhu.mongodb.net:27017,cluster0-shard-00-02-tihhu.mongodb.net:27017/ReactPhoneRecords?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

let Client = require('./client.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(URL, {
    useNewUrlParser: true });
const connection = mongoose.connection;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

clientRoutes.get('/', async (req, res, next) => {
    console.log("CLIENTS!!!");
    Client.find((err, clients) => {
        if (err) return next(err);
        res.json(clients)
    })
    const result = await Client.res.render('index', {
        clients: clients

    })
});

clientRoutes.route('/:id').put( async (req, res) => {
    console.log('F and A');
    const result = await Client.findByIdAndUpdate(req.params.id, req.body)
        return res.send(result)
});

clientRoutes.route('/:id').get( async (req, res) => {
    let id = req.params.id;
    // const response = await collection.find(req.params.id)
    const response = await Client.findById(id, function(err, client) {
        res.json(client)
    });
});


app.post('/add',(req, res) => {
    console.log(req.body)
    let client = new Client({
        client_name: req.body.client_name,
        client_phonenumber:req.body.client_phonenumber,
        client_conversation:req.body.client_conversation,
        client_postcard:req.body.client_postcard
    })
    client.save()
        .then(client => {
            res.status(200).json({'Client': 'client added succesfully'})
        })
        .catch(err => {
            res.status(400).send('adding new client failed');
        });
});

app.listen(PORT, function()  {
    console.log('Server is running on Port: ' + PORT)
})

app.use('/clients', clientRoutes)