import express from 'express';
import morgan from 'morgan';
import bookRouter from './routes/bookRouter';

class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes() {
    this.app.use('/api/books', bookRouter);
  }

  start() {
    let port = this.app.get('port');
    this.app.listen(port, () => {
      let date: Date = new Date();
      console.log(`localhost:${port} running ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    });
  }
}

export default Application;
