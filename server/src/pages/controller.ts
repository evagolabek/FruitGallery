import { JsonController, Get, Param } from 'routing-controllers'
import {Page} from './entity'

@JsonController()
export default class PageController {

  @Get('/pages/:id')
    getPage(
    @Param('id') id: number
    ) {
    return Page.findOneById(id)
    }
}
