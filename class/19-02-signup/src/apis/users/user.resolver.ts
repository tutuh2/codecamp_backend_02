import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import bcrypt from 'bcrypt'

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = bcrypt.hash(password, 10);
    return this.userService.create({
      email,
      hashedPassword,
      name,
      age,
    });
  }
}
