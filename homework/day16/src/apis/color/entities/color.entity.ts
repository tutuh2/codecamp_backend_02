import { Model } from 'src/apis/models/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Color {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    colorName: string;

    @ManyToOne(() => Model)
    Model: Model;
}
