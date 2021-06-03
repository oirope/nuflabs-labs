import * as express from 'express';
import * as getPort from 'get-port';

(async () => {
	const app = express();

	const port = await getPort({ port: 3000 });

	app.listen(port, () => {
		console.log(`Labs running on: http://localhost:${port}`);
	});
})();
