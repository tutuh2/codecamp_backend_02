import { Model } from 'src/apis/models/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class interior {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    interiorColor: string;

    @ManyToOne(() => Model)
    Model: Model;
}
