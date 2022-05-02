import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWheelDriveInput } from './dto/createWheelDrive.input';
import { WheelDrive } from './entities/wheelDrive.entity';
import { WheelDriveService } from './wheelDrive.service';

@Resolver()
export class WheelDriveResolver {
    constructor(private readonly wheelDriveService: WheelDriveService) {}
    @Query(() => [WheelDrive])
    fetchWheelDrives() {
        return this.wheelDriveService.findAll();
    }

    @Query(() => WheelDrive)
    fetchWheelDrive(@Args('wheelDriveId') wheelDriveId: string) {
        return this.wheelDriveService.findOne({ wheelDriveId });
    }

    @Mutation(() => WheelDrive)
    createWheelDrive(
        @Args('createWheelDriveInput')
        createWheelDriveInput: CreateWheelDriveInput,
    ) {
        return this.wheelDriveService.create({ createWheelDriveInput });
    }

    @Mutation(() => Boolean)
    deleteWheelDrive(@Args('wheelDriveId') wheelDriveId: string) {
        return this.wheelDriveService.delete({ wheelDriveId });
    }
}
