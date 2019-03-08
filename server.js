let express = require('express');
let bodyParser = require('body-parser');
// let path from 'path';
let cors = require('cors');
let mongoose = require('mongoose');
// let {checkToken} from './middleware/jwtmiddleware';
let videoRouter = require('./routes/videoRoutes');
let app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json()) 
app.use(cors());

console.log('process.env.PORT'+process.env.APP_PORT);
app.use('/videos', videoRouter);
// require('./routes/login')(app);
// app.use(checkToken);
// require('./routes/home')(app);
mongoose.Promise = global.Promise;

// MongoDB Connection
// if (process.env.NODE_ENV !== 'test') {
//   mongoose.connect(serverConfig.mongoURL, (error) => {
//     if (error) {
//       console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
//       throw error;
//     }
//   });
// }

mongoose.connect('mongodb://localhost/videoapp').then(() =>{
	console.log('mongodb connected successfull');
	global.PlayList = require('./models/playList');
	global.VideoInfo = require('./models/Video_info');
	// console.log("global.User="+global.User);
}).catch((e) => {
	console.log('mongodb is unable to connect'+e);
})

app.listen(8080, () => console.log('Example app is listening on port 8080'))
