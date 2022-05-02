import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService, //
    ) {}

    @Query(() => [User])
    fetchUsers() {
        return this.userService.findAll();
    }

    @Query(() => User)
    fetchUser(@Args('userId') userId: string) {
        return this.userService.findOne({ userId });
    }

    @Mutation(() => User)
    createUser(
        @Args('email') email: string,
        @Args('password') password: string,
        @Args('name') name: string,
        @Args('age') age: number,
    ) {
        return this.userService.create({
            email,
            password,
            name,
            age,
        });
    }

    @Mutation(() => Boolean)
    deleteUser(@Args('userId') userId: string) {
        return this.userService.delete({ userId });
    }
}
