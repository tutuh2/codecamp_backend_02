import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from '../models/entities/model.entity';
import { Wheelsize } from './entities/wheelsize.entity';
import { WheelsizeResolver } from './wheelsize.resolver';
import { WheelsizeSerivce } from './wheelsize.service';

@Module({
    imports: [TypeOrmModule.forFeature([Wheelsize, Model])],
    providers: [WheelsizeResolver, WheelsizeSerivce],
})
export class WheelsizeModule {}
