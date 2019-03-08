let mongoose = require('mongoose'); 

let re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

let validateURL = function(url) {
    // console.log('url'+url+'    '+re.test(url));
    return re.test(url)
};

const Schema = mongoose.Schema;

const schemaURL = {
	type: String,
    trim: true,
    unique: true,
    required: true,
    validate: [validateURL, 'Please enter a valid url']
    // ,
    // match: [re, 'Please Enters a valid url'] 
}

const VideoInfoSchema = new Schema({
  	title: { type: 'String', required: true },
  	duration: { type: 'Number', required: [true, 'Please Enter a valid duration'] },
  	videoURL: {
                type: String,
                trim: true,
                unique: true,
                required: true,
                validate: {
                  validator: function(v) {
                    return re.test(v);
                  },
                  message: props => `${props.value} is not a valid URL!`
                },
                // validate: [validateURL, 'Please enter a valid url']
                // ,
                // match: [re, 'Please Enters a valid url'] 
            },
  	thumbnailURL: {
              type: String,
              trim: true,
              unique: true,
              required: true,
              validate: [validateURL, 'Please enter a valid url']
              // validate: {
              //     validator: function(v) {
              //       return re.test(v);
              //     },
              //     message: props => `${props.value} is not a valid URL!`
              //   },
    // ,
    // match: [re, 'Please Enters a valid url'] 
},
  	createdAt: {
            type: Date,
            default: Date.now
    },
	updatedAt: {
	    type: Date,
	    default: Date.now
	},
});

module.exports = mongoose.model('VideoInfo', VideoInfoSchema);