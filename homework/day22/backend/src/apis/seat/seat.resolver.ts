import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSeatInput } from './dto/createSeat.input';
import { Seat } from './entities/seat.entity';
import { SeatService } from './seat.service';

@Resolver()
export class SeatResolver {
    constructor(private readonly seatService: SeatService) {}

    @Query(() => [Seat])
    fetchSeats() {
        return this.seatService.findAll();
    }

    @Query(() => Seat)
    fetchSeat(@Args('seatId') seatId: string) {
        return this.seatService.findOne({ seatId });
    }

    @Mutation(() => Seat)
    createSeat(@Args('createSeatInput') createSeatInput: CreateSeatInput) {
        return this.seatService.create({ createSeatInput });
    }

    @Mutation(() => Boolean)
    deleteSeat(@Args('seatId') seatId: string) {
        return this.seatService.delete({ seatId });
    }
}
