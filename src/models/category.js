'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const CategorySchema = Schema({
    title:          String,
    description:    String,
});

module.exports = mongoose.model('Category', CategorySchema);