import * as dotenv from 'dotenv';
import * as express from 'express';
import * as getPort from 'get-port';

dotenv.config();

(async () => {
	const app = express();

	app.set('port', await getPort({ port: 3000 }));

	app.listen(app.get('port'));
	if (process.env.NODE_ENV === 'development')
		console.log(`Labs running on: http://localhost:${app.get('port')}`);
})();
