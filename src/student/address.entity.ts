import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { StudentEntity } from './student.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsNotEmpty()
    @Column({ name: 'road', length: 100, nullable: false })
    road: string;

    @IsNotEmpty()
    @Column({ name: 'district', length: 100, nullable: false })
    district: string;

    @IsNotEmpty()
    @Column({ name: 'city', length: 100, nullable: false })
    city: string;

    @IsNotEmpty()
    @Column({ name: 'state', length: 100, nullable: false })
    state: string;

    @IsNotEmpty()
    @Column({ name: 'number', length: 100, nullable: false })
    number: string;

    @IsOptional()
    @Column({ name: 'complement', length: 100, nullable: false })
    complement: string;
}