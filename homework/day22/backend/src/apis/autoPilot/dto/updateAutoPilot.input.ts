import { InputType, PartialType } from '@nestjs/graphql';
import { CreateAutoPilotInput } from './createAutoPilot.input';

@InputType()
export class UpdateAutoPilotInput extends PartialType(CreateAutoPilotInput) {}
