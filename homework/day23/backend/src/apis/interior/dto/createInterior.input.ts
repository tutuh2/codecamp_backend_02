import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInteriorInput {
    @Field(() => String)
    interiorColor: string;

    @Field(() => String)
    modelId: string;
}
