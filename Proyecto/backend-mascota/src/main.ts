import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as ejs from 'ejs';

import * as FileSession from 'session-file-store';
import * as express from 'express';
const FileStore = FileSession(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
      session({
        secret: 'No sera de tomar un traguito',
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false},
        name: 'server-session-id',
        store: new FileStore()
      })
  );


  app.use(cookieParser(
      'me gustan los tacos', // secreto
      {  // opciones

      }
  ));
  app.set('view engine', 'ejs');

  app.use(express.static('publico')
  );

  app.set('view engine', 'ejs');
  await app.listen(3009);
}
bootstrap();
