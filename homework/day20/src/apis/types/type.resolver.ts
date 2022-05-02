import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Type } from './entities/type.entity';
import { TypeService } from './type.service';

@Resolver()
export class TypeResolver {
    constructor(
        private readonly typeService: TypeService, //
    ) {}

    @Mutation(() => Type)
    createType(
        @Args('name') name: string, //
    ) {
        return this.typeService.create({ name });
    }
}
