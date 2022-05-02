import { Model } from 'src/apis/models/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WheelSize {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    size: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToOne(() => Model)
    Model: Model;
}
