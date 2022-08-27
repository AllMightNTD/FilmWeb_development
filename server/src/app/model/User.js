const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: String,
        description: String,
        image: String,
        videoID: String,
        // Random Slug : Tải slug generator
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
