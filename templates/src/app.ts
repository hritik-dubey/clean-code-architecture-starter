import dotenv from "dotenv";
import "reflect-metadata";
import "./infrastructure/datasources/search.datasource";
import globalErrorHandlerModel from "./utils/global-error-handler.model";
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { InversifyExpressServer } from "inversify-express-utils";
import bodyParser from "body-parser";
import "./api/bindings/application.istance";
let container = new Container();
container.load(buildProviderModule());

let server = new InversifyExpressServer(container, null, { rootPath: "/dummy-service" });

server.setConfig((theApp) => {
  theApp.use(bodyParser.json());
  theApp.use(bodyParser.urlencoded({ extended: true }));
  theApp.use(globalErrorHandlerModel);
});


const app = server.build();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/" + process.env.CONTEXT_PATH + "ping", (_req, res) => {
  res.send("Service " + process.env.CONTEXT_PATH + " is responding to Ping");
});

app.get("/" + process.env.CONTEXT_PATH + "health", (_req, res) => {
  res.status(200).send("Service " + process.env.CONTEXT_PATH + " is healthy");
});

app.all('*', (req, res) => {
  res
    .status(404)
    .send(`Error: Api not found in store catalog for route "${req.url}"`);
});

app.use(globalErrorHandlerModel)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
