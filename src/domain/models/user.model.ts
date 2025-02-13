import { Entity, PrimaryGeneratedColumn,Column, ObjectIdColumn } from "typeorm";


@Entity("user")
export class User{
    @ObjectIdColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    role: string;
}