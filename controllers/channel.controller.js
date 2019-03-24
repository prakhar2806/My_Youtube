const Channel = require('../models/channel.model');

exports.getAllChannels = function (req, res) {
    Channel.fetchAll()
        .then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        })

}

exports.addChannel = function (req, res, next) {

    const name = req.body.name;
    const channelId = req.body.channelId;
    const channel = new Channel(name, channelId);
    channel.save()
        .then(result => {
            res.send(result);
            console.log(result);
            console.log("channel Added");
        }).catch(err => {
            console.log(err);
        })
}