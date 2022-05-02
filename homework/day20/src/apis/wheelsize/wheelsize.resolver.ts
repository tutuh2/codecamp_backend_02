import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWheelsizeInput } from './dto/createWheelsize.input';
import { Wheelsize } from './entities/wheelsize.entity';
import { WheelsizeSerivce } from './wheelsize.service';

@Resolver()
export class WheelsizeResolver {
    constructor(private readonly wheelsizeService: WheelsizeSerivce) {}

    @Query(() => [Wheelsize])
    fetchWheelsizes() {
        return this.wheelsizeService.findAll();
    }

    @Query(() => Wheelsize)
    fetchWheelsize(@Args('wheelsizeId') wheelsizeId: string) {
        return this.wheelsizeService.findOne({ wheelsizeId });
    }

    @Mutation(() => Wheelsize)
    createWheelsize(
        @Args('createWheelsizeInput')
        createWheelsizeInput: CreateWheelsizeInput,
    ) {
        return this.wheelsizeService.create({ createWheelsizeInput });
    }

    @Mutation(() => Boolean)
    deleteWheelsize(@Args('wheelsizeId') wheelsizeId: string) {
        return this.wheelsizeService.delete({ wheelsizeId });
    }
}
