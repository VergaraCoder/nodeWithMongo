import { DataSource } from "typeorm";


export const dbConnection=new DataSource({
    type:"mongodb",
    
});