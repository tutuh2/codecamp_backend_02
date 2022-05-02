import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from '../models/entities/model.entity';
import { Interior } from './entities/interior.entity';
import { InteriorResolver } from './interior.resolver';
import { InteriorService } from './interior.service';

@Module({
    imports: [TypeOrmModule.forFeature([Interior, Model])],
    providers: [InteriorResolver, InteriorService],
})
export class InteriorModule {}
