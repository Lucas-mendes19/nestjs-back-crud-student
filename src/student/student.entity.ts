import { Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { AddressEntity } from './address.entity';

@Entity({ name: 'student' })
export class StudentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'birth_date', length: 10, nullable: false })
    birthDate: string;

    @Column({ name: 'cpf', length: 14, nullable: false })
    cpf: string;

    @OneToOne(() => AddressEntity, {
        cascade: true,
        eager: true
    })
    @JoinColumn()
    address: AddressEntity;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}