"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let RecipeController = class RecipeController {
    async allFruits() {
        const recipes = await entity_1.default.find();
        return { recipes };
    }
    getFruit(id) {
        return entity_1.default.findOne(id);
    }
    async updateRecipe(id, update) {
        const recipe = await entity_1.default.findOne(id);
        if (!recipe)
            throw new routing_controllers_1.NotFoundError('Cannot find recipe');
        return entity_1.default.merge(recipe, update).save();
    }
    createFruit(recipe) {
        return recipe.save();
    }
    async deleteRecipe(id) {
        const recipe = await entity_1.default.findOne(id);
        if (!recipe)
            throw new routing_controllers_1.NotFoundError('Recipe not found');
        recipe.remove();
        return {
            message: 'Successfully removed'
        };
    }
};
__decorate([
    routing_controllers_1.Get('/recipes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "allFruits", null);
__decorate([
    routing_controllers_1.Get('/recipes/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "getFruit", null);
__decorate([
    routing_controllers_1.Put('/recipes/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "updateRecipe", null);
__decorate([
    routing_controllers_1.Post('/recipes'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", void 0)
], RecipeController.prototype, "createFruit", null);
__decorate([
    routing_controllers_1.Delete('/recipes/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "deleteRecipe", null);
RecipeController = __decorate([
    routing_controllers_1.JsonController()
], RecipeController);
exports.default = RecipeController;
//# sourceMappingURL=controller.js.map