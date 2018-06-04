import { JsonController, Get, Put, Post, Delete, HttpCode, Param, Body, NotFoundError } from 'routing-controllers'
import {RecipeFruit} from './entity'

@JsonController()
export default class RecipeFruitController {

  // @Get('/fruits')
  // async allFruits() {
  //   const fruits = await Fruit.find()
  //   return { fruits }
  // }
  //
  // @Get('/fruits/:id')
  // getFruit(
  //   @Param('id') id: number
  // ) {
  //   return Fruit.findOne(id)
  // }
  //
  // @Put('/fruits/:id')
  // async updateFruit(
  //   @Param('id') id: number,
  //   @Body() update: Partial<Fruit>
  // ) {
  //   const fruit = await Fruit.findOne(id)
  //   if (!fruit) throw new NotFoundError('Cannot find fruit')
  //
  //   return Fruit.merge(fruit, update).save()
  // }
  //
  // @Post('/fruits')
  // @HttpCode(201)
  // createFruit(
  //   @Body() fruit: Fruit
  // ) {
  //   return fruit.save()
  // }
  //
  // @Delete('/fruits/:id')
  // async deleteFruit(
  //   @Param('id') id: number,
  // ){
  //   const fruit = await Fruit.findOne(id)
  //   if (!fruit) throw new NotFoundError('Fruit not found')
  //   fruit.remove()
  //   return {
  //     message: 'Successfully removed'
  //   }
  // }
}
