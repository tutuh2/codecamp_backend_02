import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateAutoPilotInput } from './dto/createAutoPilot.input';
import { UpdateAutoPilotInput } from './dto/updateAutoPilot.input';
import { AutoPilot } from './entities/autoPilot.entity';
import { AutoPilotService } from './autoPilot.service';

@Resolver()
export class AutoPilotResolver {
    constructor(
        private readonly autoPilotService: AutoPilotService, //
    ) {}

    @Query(() => [AutoPilot])
    fetchAutoPilots() {
        return this.autoPilotService.findAll();
    }

    @Query(() => AutoPilot)
    fetchAutoPilot(
        @Args('autoPilotId') autoPilotId: string, //
    ) {
        return this.autoPilotService.findOne({ autoPilotId });
    }

    @Mutation(() => AutoPilot)
    createAutoPilot(
        @Args('createAutoPilotInput') createAutoPilotInput: CreateAutoPilotInput,
    ) {
        return this.autoPilotService.create({ createAutoPilotInput });
    }

    @Mutation(() => AutoPilot)
    async updateAutoPilot(
        @Args('autoPilotId') autoPilotId: string,
        @Args('updateAutoPilotInput') updateAutoPilotInput: UpdateAutoPilotInput,
    ) {
        return await this.autoPilotService.update({
            autoPilotId,
            updateAutoPilotInput,
        });
    }

    @Mutation(() => Boolean)
    deleteAutoPilot(@Args('autoPilotId') autoPilotId: string) {
        return this.autoPilotService.delete({ autoPilotId });
    }
}
