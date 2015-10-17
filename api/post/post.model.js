'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {type: String, trim: true},
    image: {type: String, trim: true},
    summary: String,
    content: String,
    createBy: {type:String, default: 'Clairton Luz'},
    createAt: {type: Date, default: Date.now},
    active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Post', PostSchema);
