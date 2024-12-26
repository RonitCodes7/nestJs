import { Module, Global } from '@nestjs/common';
import { CatsController } from '../Controllers/cats.controller';
import { CatsService } from '../Service/cats.services';
@Global()
@Module({
  imports: [],
  controllers: [CatsController],
  providers: [ CatsService],
  exports: [CatsService]
})
// export class CatsModule {}
export class CatsModule {
    constructor(private catsService: CatsService) {}
}
