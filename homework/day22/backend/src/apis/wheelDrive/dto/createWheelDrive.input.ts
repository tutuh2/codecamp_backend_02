import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWheelDriveInput {
    @Field(() => String)
    wheelDrive: string;

    @Field(() => String)
    modelId: string;
}
