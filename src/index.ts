import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'));
if (process.env.NODE_ENV === 'development')
	console.log(`Labs running on: http://localhost:${app.get('port')}`);