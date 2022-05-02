import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateModelInput {
    @Field(() => String)
    name: string;

    @Field(() => Int)
    range: number;

    @Field(() => Int)
    speed: number;

    @Field(() => Float)
    zeroHundred: number;

    @Field(() => Int)
    modelPrice: number;
}
