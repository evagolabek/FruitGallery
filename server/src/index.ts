import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import FruitController from './fruits/controller'
import RecipeController from './recipes/controller'
import RecipeFruitController from './recipeFruits/controller'
import setupDb from './db'

const app = createKoaServer({
  cors: true,
  controllers: [
    FruitController,
    RecipeController,
    RecipeFruitController
  ]
})

setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))
