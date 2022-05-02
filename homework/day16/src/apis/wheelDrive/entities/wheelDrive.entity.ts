import { Model } from 'src/apis/models/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WheelDrive {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    wheelDrive: string;

    @ManyToOne(() => Model)
    Model: Model;
}
