import express from 'express';
import nextServer from 'next';
import { router } from './routes';
import { api } from './api';
import { errorHandler } from './handler';

const app = nextServer({ dev: true });
const PORT = 3000;

const handler = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use('/api', api);
  server.use(handler);
  server.use(errorHandler);

  server.listen(PORT, (err: any) => {
    if (err) {
      throw err;
    }

    console.log(`Server Ready at PORT => ${PORT}`);
  });
});
