import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoPilot } from './entities/autoPilot.entity';
import { AutoPilotResolver } from './autoPilot.resolver';
import { AutoPilotService } from './autoPilot.service';
import { Model } from '../models/entities/model.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AutoPilot, Model])],
    providers: [
        AutoPilotResolver, //
        AutoPilotService,
    ],
})
export class AutoPilotModule {}
