import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => console.log('Successfully connected with database'))