import { InputType, PartialType } from '@nestjs/graphql';
import { CreateColorInput } from './createColor.input';

@InputType()
export class UpdateColorInput extends PartialType(CreateColorInput) {}
