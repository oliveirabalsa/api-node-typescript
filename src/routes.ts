import {UserController} from "./controller/UserController";
import { ProductsController } from './controller/ProductsController';

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {    
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/products",
    controller: ProductsController,
    action: "all"
}, {
    method: "post",
    route: "/products",
    controller: ProductsController,
    action: "save"
}];