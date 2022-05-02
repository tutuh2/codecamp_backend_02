import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from '../models/entities/model.entity';
import { Color } from './entities/color.entity';
import { ColorResolver } from './color.resolver';
import { ColorService } from './color.service';

@Module({
    imports: [TypeOrmModule.forFeature([Color, Model])],
    providers: [
        ColorResolver, //
        ColorService,
    ],
})
export class ColorModule {}
