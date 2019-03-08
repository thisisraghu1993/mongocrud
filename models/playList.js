let mongoose = require('mongoose');
// let { defSchemaURL, defSchemaDate } = require('./utils/data.js');
let re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

let validateURL = function(url) {
    return re.test(url)
};

const Schema = mongoose.Schema;

const schemaURL = {
	type: String,
    trim: true,
    unique: true,
    required: true,
    validate: [validateURL, 'Please enter a valid url'],
    match: [re, 'Please enter a valid url'] 
}

const PlayListSchema = new Schema({
  	name: { type: 'String', required: true },
  	playListURL: schemaURL,
  	// videos: schemaURL,
  	videos: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
  	createdAt: {
            type: Date,
            default: Date.now
    },
	updatedAt: {
	    type: Date,
	    default: Date.now
	},
});

module.exports = mongoose.model('playList', PlayListSchema);