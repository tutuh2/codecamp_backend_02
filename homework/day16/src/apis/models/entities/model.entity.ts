import { Type } from 'src/apis/types/entities/type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Model {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    range: number;

    @Column()
    speed: number;

    @Column()
    zeroHundred: number;

    @Column()
    modelPrice: number;

    @ManyToOne(() => Type)
    Type: Type;
}
