import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateWheelsizeInput {
    @Field(() => Int)
    size: number;

    @Field(() => String)
    name: string;

    @Field(() => Int)
    price: number;

    @Field(() => String)
    modelId: string;
}
