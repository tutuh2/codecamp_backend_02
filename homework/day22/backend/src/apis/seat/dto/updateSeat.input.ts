import { InputType, PartialType } from '@nestjs/graphql';
import { CreateSeatInput } from './createSeat.input';

@InputType()
export class UpdateSeatInput extends PartialType(CreateSeatInput) {}
