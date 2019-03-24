const getDb = require('../util/database').getDb;
const mongoDb = require('mongodb');

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


class Video {
    constructor(title, url, channelId) {
        this.title = title;
        this.url = url;
        this.channelId = channelId;
    }

    save() {
        const db = getDb();
        return db.collection('videos').insertOne(this)
            .then(result => {
                console.log("video added successfully");
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();

        //find doesn't return promise, it return cursers  
        return db.collection('videos')
            .find()
            .toArray()
            .then(videos => {
                return videos;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(videoId) {
        const db = getDb();

        return db.collection('videos')
            .find({ _id: new mongoDb.ObjectID(videoId) })
            .next()
            .then(videos => {
                console.log("videos", videos);
                return videos;
            })
            .catch(err => {
                console.log(err);
            });
    }
}


// Export the model
module.exports = Video;