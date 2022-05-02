import { Model } from 'src/apis/models/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AutoPilot {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    isAuto: boolean;

    @Column()
    price: number;

    @ManyToOne(() => Model)
    Model: Model;
}
