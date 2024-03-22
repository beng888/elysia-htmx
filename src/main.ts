import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { pages } from "./pages/*";

const app = new Elysia()
	.use(swagger())
	.use(pages)
	.listen(Bun.env.PORT ?? 4321);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
