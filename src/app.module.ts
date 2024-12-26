import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users.controller';
import { CatsModule } from './Modules/cats.module';
import { LoggerMiddleWare } from './Middleware/logger.middleware';
import { CatsController } from './Controllers/cats.controller';
@Module({
  imports: [CatsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleWare).forRoutes({path: "cats", method: RequestMethod.GET })
    consumer
      .apply(LoggerMiddleWare)
      .exclude({ path: 'cats', method: RequestMethod.GET })
      .forRoutes(CatsController);
  }
}


