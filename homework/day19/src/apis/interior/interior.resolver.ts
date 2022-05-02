import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateInteriorInput } from './dto/createInterior.input';
import { Interior } from './entities/interior.entity';
import { InteriorService } from './interior.service';

@Resolver()
export class InteriorResolver {
    constructor(private readonly interiorService: InteriorService) {}

    @Query(() => [Interior])
    fetchInteriors() {
        return this.interiorService.findAll();
    }

    @Query(() => Interior)
    fetchInterior(@Args('interiorId') interiorId: string) {
        return this.interiorService.findOne({ interiorId });
    }

    @Mutation(() => Interior)
    createInterior(
        @Args('createInteriorInput') createInteriorInput: CreateInteriorInput,
    ) {
        return this.interiorService.create({ createInteriorInput });
    }
    @Mutation(() => Boolean)
    deleteInterior(@Args('interiorId') interiorId: string) {
        return this.interiorService.delete({ interiorId });
    }
}
