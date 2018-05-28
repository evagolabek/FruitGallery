import { JsonController, Get, Put, Post, Delete, HttpCode, Param, Body, NotFoundError } from 'routing-controllers'
import {Recipe} from './entity'

@JsonController()
export default class RecipeController {

  @Get('/recipes')
  async allFruits() {
    const recipes = await Recipe.find()
    return { recipes }
  }

  @Get('/recipes/:id')
  getFruit(
    @Param('id') id: number
  ) {
    return Recipe.findOne(id)
  }

  @Put('/recipes/:id')
  async updateRecipe(
    @Param('id') id: number,
    @Body() update: Partial<Recipe>
  ) {
    const recipe = await Recipe.findOne(id)
    if (!recipe) throw new NotFoundError('Cannot find recipe')

    return Recipe.merge(recipe, update).save()
  }

  @Post('/recipes')
  @HttpCode(201)
  createFruit(
    @Body() recipe: Recipe
  ) {
    return recipe.save()
  }

  @Delete('/recipes/:id')
  async deleteRecipe(
    @Param('id') id: number,
  ){
    const recipe = await Recipe.findOne(id)
    if (!recipe) throw new NotFoundError('Recipe not found')
    recipe.remove()
    return {
      message: 'Successfully removed'
    }
  }
}
