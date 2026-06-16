import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [PublicController],
})
export class PublicModule {}
