import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import RecipeFruit from '../recipeFruits/entity'


@Entity()
export default class Fruit extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @Column('text', {nullable:false})
  img: string

  @IsString()
  @Column('text', {nullable:false})
  origin: string

  @IsString()
  @Column('text', {nullable:false})
  benefits: string

  @OneToMany(_=> RecipeFruit, recipeFruit => recipeFruit.fruit)
  recipeFruits: RecipeFruit[]

  // @ManyToOne(_=> Recipe, recipe => recipe.fruits)
  // recipe: Recipe;
}
