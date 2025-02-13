import { Router} from 'express';
    import { UserController } from '../controllers/user.controller.ts';
    

    const routes:Router=Router();
    
    routes.post("/user", UserController.createUser);
    routes.get("/user",UserController.findAllUser);
    routes.get("/user/:idUser",UserController.findOneUser);
    routes.patch("/user/:idUser",UserController.updateUser);
    routes.delete("/user/:idUser",UserController.deleteUser)


    export default routes;