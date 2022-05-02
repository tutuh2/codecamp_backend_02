import { InputType, PartialType } from '@nestjs/graphql';
import { CreateInteriorInput } from './createInterior.input';

@InputType()
export class UpdateInteriorInput extends PartialType(CreateInteriorInput) {}
