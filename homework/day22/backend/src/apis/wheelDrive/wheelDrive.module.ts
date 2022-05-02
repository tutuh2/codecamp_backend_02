import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from '../models/entities/model.entity';
import { WheelDrive } from './entities/wheelDrive.entity';
import { WheelDriveResolver } from './wheelDrive.resolver';
import { WheelDriveService } from './wheelDrive.service';

@Module({
    imports: [TypeOrmModule.forFeature([WheelDrive, Model])],
    providers: [WheelDriveResolver, WheelDriveService],
})
export class WheelDriveModule {}
