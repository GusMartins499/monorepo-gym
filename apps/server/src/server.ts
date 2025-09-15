import 'dotenv/config'
import "reflect-metadata"
import { app } from "./app";
import errorHandler from "./middleware/error-handler";

app.use(errorHandler);

app.listen(3333, () => console.log('Server running at http://localhost:3333'))
