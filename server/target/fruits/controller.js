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
let FruitController = class FruitController {
    async allFruits() {
        const fruits = await entity_1.Fruit.find();
        return { fruits };
    }
    getFruit(id) {
        return entity_1.Fruit.findOne(id);
    }
    async updateFruit(id, update) {
        const fruit = await entity_1.Fruit.findOne(id);
        if (!fruit)
            throw new routing_controllers_1.NotFoundError('Cannot find fruit');
        return entity_1.Fruit.merge(fruit, update).save();
    }
    createFruit(fruit) {
        return fruit.save();
    }
    async deleteFruit(id) {
        const fruit = await entity_1.Fruit.findOne(id);
        if (!fruit)
            throw new routing_controllers_1.NotFoundError('Fruit not found');
        fruit.remove();
        return {
            message: 'Successfully removed'
        };
    }
};
__decorate([
    routing_controllers_1.Get('/fruits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FruitController.prototype, "allFruits", null);
__decorate([
    routing_controllers_1.Get('/fruits/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FruitController.prototype, "getFruit", null);
__decorate([
    routing_controllers_1.Put('/fruits/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FruitController.prototype, "updateFruit", null);
__decorate([
    routing_controllers_1.Post('/fruits'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.Fruit]),
    __metadata("design:returntype", void 0)
], FruitController.prototype, "createFruit", null);
__decorate([
    routing_controllers_1.Delete('/fruits/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FruitController.prototype, "deleteFruit", null);
FruitController = __decorate([
    routing_controllers_1.JsonController()
], FruitController);
exports.default = FruitController;
//# sourceMappingURL=controller.js.map