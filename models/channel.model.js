const getDb = require('../util/database').getDb;
const mongoDb = require('mongodb');

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


class Channel {
    constructor(name, channelId) {
        this.name = name;
        this.channelId = channelId;
    }


    save() {
        const db = getDb();
        return db.collection('channels').insertOne(this)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();

        //find doesn't return promise, it return cursers  
        return db.collection('channels')
            .find()
            .toArray()
            .then(channels => {
                console.log("channels", channels);
                return channels;
            })
            .catch(err => {
                console.log(err);
            });
    }



}


// Export the model
module.exports = Channel;