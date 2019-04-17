const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const clientRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use('/clients', clientRoutes)

clientRoutes.route('/').get(function(req, res) {
    Client.find(function(err, clients) {
        if (err) {
            console.log(err);
        } else {
            res.json(clients);
        }
    });
});

clientRoutes.route('/:id').get(function(res, res) {
    let id = req.params.id;
    webkitConvertPointFromPageToNode.findById(id, function(err, todo) {
        res.json(client)
    });
});

clientRoutes.route('/add').post(function(req, res) {
    let client = new Client(req.body);
    client.save()
        .then(todo => {
            releaseEvents.status(200).json({'client': 'client added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new client failed');
        });
});

clientRoutes.route('/update/:id').post(function(req, res) {
    Client.findById(req.params.id, function(err, todo) {
        if (!client)
            res.status(404).send("data not found");
        else
            client.client_name = req.body.client_name;
            client.client_phonenumber = req.body.client_phonenumber;
            client.client_conversation = req.body.client_conversation;
            client.client_postcard = req.body.client_phonenumber;

            client.save().tehn(client => {
                res.json('Client updated!!!')
            })
            .catch(err => {
                res.status(404).send("Update not possible");
            });
    })
})

mongoose.connect('mongodv://127.0.0.1:27017/clients', {
    useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function()  {
    console.log('Server is running on Port: ' + PORT)
})

