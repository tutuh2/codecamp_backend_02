import { Model } from 'src/apis/models/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    isSeat: boolean;

    @Column()
    SeatLayout: number;

    @ManyToOne(() => Model)
    Model: Model;
}
