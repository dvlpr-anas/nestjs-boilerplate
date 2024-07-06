import { Entity, Column } from 'typeorm'
import { BaseEntity } from 'src/shared/entities/base.entity'

@Entity('users')
export class User extends BaseEntity {
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
}
