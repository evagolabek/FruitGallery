import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import RecipeFruit from '../recipeFruits/entity'


@Entity()
export default class Recipe extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @Column('text', {nullable:false})
  img: string

  @OneToMany(_=> RecipeFruit, recipeFruit => recipeFruit.recipe)
  recipeFruits: RecipeFruit[]

}
