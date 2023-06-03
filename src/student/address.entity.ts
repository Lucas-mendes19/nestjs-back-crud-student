import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { StudentEntity } from './student.entity';

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'road', length: 100, nullable: false })
    road: string;

    @Column({ name: 'district', length: 100, nullable: false })
    district: string;

    @Column({ name: 'city', length: 100, nullable: false })
    city: string;

    @Column({ name: 'state', length: 100, nullable: false })
    state: string;

    @Column({ name: 'number', length: 100, nullable: false })
    number: string;

    @Column({ name: 'complement', length: 100, nullable: false })
    complement: string;
}