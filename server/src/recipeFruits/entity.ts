import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import Recipe from '../recipes/entity'
import Fruit from '../fruits/entity'

@Entity()
export default class RecipeFruit extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_=> Fruit, fruit => fruit.recipeFruits)
  fruit: Fruit;

  @ManyToOne(_=> Recipe, recipe => recipe.recipeFruits)
  recipe: Recipe;


  @IsString()
  @Column('te', {nullable:false})
  quantity: string
  //
  // @IsString()
  // @Column('text', {nullable:false})
  // img: string
  //
  // @IsString()
  // @Column('text', {nullable:false})
  // origin: string
  //
  // @IsString()
  // @Column('text', {nullable:false})
  // benefits: string

  // @ManyToOne(_=> Recipe, recipe => recipe.fruits)
  // recipe: Recipe;
}
