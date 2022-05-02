import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAutoPilotInput {
    @Field(() => Boolean)
    isAuto: boolean;

    @Field(() => Int)
    price: number;

    @Field(() => String)
    modelId: string;
}
