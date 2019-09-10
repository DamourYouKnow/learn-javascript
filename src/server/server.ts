import * as path from 'path';
import * as express from 'express';

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../../public')));

app.listen(port);
console.log(`Listening on port ${port}`);