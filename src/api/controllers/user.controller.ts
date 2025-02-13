import { NextFunction, Request, Response } from "express";
    import { UserService } from "../../application/services/user.service.ts";
    import { container } from "tsyringe";
    
    
    export class UserController {
        public static async createUser(req: Request, res: Response, next: NextFunction) {
            const userService:UserService=container.resolve(UserService);
        }
    
        public static async findAllUser(req: Request, res: Response, next: NextFunction) {
            const userService:UserService=container.resolve(UserService);
        }
    
    
        public static async findOneUser(req: Request, res: Response, next: NextFunction) {
            const userService:UserService=container.resolve(UserService);
        }
    
    
        public static async updateUser(req: Request, res: Response, next: NextFunction) {
            const userService:UserService=container.resolve(UserService);
        }
    
        public static async deleteUser(req: Request, res: Response, next: NextFunction) {
            const userService:UserService=container.resolve(UserService);
        }
    
    
    }