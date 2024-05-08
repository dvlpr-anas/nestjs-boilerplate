import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 255 })
    firstName: string

    @Column({ length: 255, default: '' })
    lastName: string

    @Column('int', { nullable: true })
    age: number

    @Column({ unique: true })
    userName: string

    @Column({ length: 255, select: false })
    password: string

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        select: false,
    })
    createdAt!: string

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        select: false,
    })
    updatedAt!: string
}
