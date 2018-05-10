import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsNumber } from 'class-validator'

@Entity()
export class Fruit extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  type: string

  @IsString()
  @Column('text', {nullable:false})
  image: string

  @IsString()
  @Column('text', {nullable:false})
  origin: string

  @IsNumber()
  @Column('real', {nullable:false})
  pricePerKilo: number

  @IsString()
  @Column('text', {nullable:false})
  benefits: string
}
