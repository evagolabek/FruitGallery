import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import Recipe from '../recipes/entity'

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

  @ManyToOne(_=> Recipe, recipe => recipe.fruits)
  recipe: Recipe[]
}
