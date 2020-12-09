import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('rent')
class Rent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_movie: number;

    @Column()
    id_user: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Rent