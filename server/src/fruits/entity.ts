import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'

@Entity()
export class Fruit extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  type: string

  @IsString()
  @Column('text', {nullable:false})
  img: string

  @IsString()
  @Column('text', {nullable:false})
  origin: string

  // @IsNumber() //does not allow input with httpie, not recognised as number
  @Column('real', {nullable:false})
  pricePerKilo: number

  @IsString()
  @Column('text', {nullable:false})
  benefits: string
}
