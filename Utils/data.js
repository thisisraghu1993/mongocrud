let re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

let validateURL = function(url) {
    return re.test(url)
};

export const defSchemaURL = {
	type: String,
    trim: true,
    unique: true,
    required: true,
    validate: [validateURL, 'Please enter a valid url'],
    match: [re, 'Please enter a valid url'] 
}

export const defSchemaDate = {
    type: Date,
    default: Date.now
}