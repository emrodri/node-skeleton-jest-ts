import express from 'express';
import { healthCheckController } from './controllers/health_check.controller';

const app: express.Application = express();

app.get('/', healthCheckController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
