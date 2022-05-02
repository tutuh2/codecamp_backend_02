import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateSeatInput {
    @Field(() => Boolean)
    isSeat: boolean;

    @Field(() => Int)
    seatLayout: number;

    @Field(() => String)
    modelId: string;
}
