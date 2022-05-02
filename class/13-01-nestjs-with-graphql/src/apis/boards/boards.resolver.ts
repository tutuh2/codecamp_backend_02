import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';

@Resolver()
export class BoardResolver {
    constructor(private readonly boardService: BoardService) {}

    @Query(() => String) //GraphQL의 타입 GraphQL의 숫자는 Int, 논리값은 Boolean
    getHello(): string {
        //TS의 타입, TS의 숫자는 number, 논리값은 boolean
        return this.boardService.aaa();
    }
}
