import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightersService } from './fighters/fighters.service';
import { FightersController } from './fighters/fighters.controller';

@Module({
  imports: [],
  controllers: [AppController, FightersController],
  providers: [AppService, FightersService],
})
export class AppModule {}
