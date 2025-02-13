import { container } from "tsyringe";
    import { UserService } from "../services/user.service.ts";
    

    container.registerSingleton<UserService>(UserService);