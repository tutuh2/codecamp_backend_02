import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateColorInput {
    @Field(() => String)
    colorName: string;

    @Field(() => String)
    modelId: string;
}
