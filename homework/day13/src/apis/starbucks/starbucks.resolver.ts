import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { Starbucks } from './entities/starbucks.entity';
import { CreateStarbucksInput } from './dto/createStarbucks.input';

@Resolver()
export class StarbucksResolver {
    constructor(private readonly starbucksService: StarbucksService) {}

    @Query(() => [Starbucks])
    fetchStarbucks() {
        return this.starbucksService.findAll();
    }

    @Mutation(() => String)
    createStarbucks(
        @Args('name') name: string,
        @Args('price') price: number,
        @Args('kcal') kcal: number,
        @Args('fat') fat: number,
        @Args('protein') protein: number,
        @Args('sodium') sodium: number,
        @Args('carb') carb: number,
        @Args('caffeine') caffeine: number,
    ) {
        console.log(name);
        console.log(price);
        console.log(kcal);
        console.log(fat);
        console.log(protein);
        console.log(sodium);
        console.log(carb);
        console.log(caffeine);
        return this.starbucksService.create();
    }
}
