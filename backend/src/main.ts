import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // print out all the registered routes
  const server = app.getHttpServer();
  const router = server._events.request._router;
  const availableRoutes: [] = router.stack
    .map((layer) => {
      if (layer.route) {
        return {
          path: layer.route?.path,
          method: Object.keys(layer.route.methods)[0].toUpperCase(),
        };
      }
    })
    .filter((item) => item !== undefined);

  Logger.log('Registered Routes:', JSON.stringify(availableRoutes, null, 2));
}
bootstrap();
