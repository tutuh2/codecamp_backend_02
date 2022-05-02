import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { CreateColorInput } from './dto/createColor.input';
import { UpdateColorInput } from './dto/updateColor.input';
import { Color } from './entities/color.entity';

@Resolver()
export class ColorResolver {
    constructor(
        private readonly colorService: ColorService, //
    ) {}

    @Query(() => [Color])
    fetchColors() {
        return this.colorService.findAll();
    }

    @Query(() => Color)
    fetchColor(
        @Args('colorId') colorId: string, //
    ) {
        return this.colorService.findOne({ colorId });
    }

    @Mutation(() => Color)
    createColor(
        @Args('createColorInput')
        createColorInput: CreateColorInput,
    ) {
        return this.colorService.create({ createColorInput });
    }

    @Mutation(() => Color)
    async updateColor(
        @Args('colorId') colorId: string,
        @Args('updateColorInput')
        updateColorInput: UpdateColorInput,
    ) {
        return await this.colorService.update({
            colorId,
            updateColorInput,
        });
    }

    @Mutation(() => Boolean)
    deleteColor(@Args('colorId') colorId: string) {
        return this.colorService.delete({ colorId });
    }
}
