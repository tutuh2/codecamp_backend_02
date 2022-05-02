import { InputType, PartialType } from '@nestjs/graphql';
import { CreateTypeInput } from './createType.input';


@InputType()
export class UpdateModelInput extends PartialType(CreateTypeInput) {}
