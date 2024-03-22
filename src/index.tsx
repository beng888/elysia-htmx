import { html } from "@elysiajs/html";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import userRoutes from "./routes/user.routes";

const app = new Elysia()
  .use(swagger())
  .use(userRoutes)
  .use(html())
  .get("/", () => (
    <html lang="en">
      <head>
        <title>Hello World</title>
        <script src="https://cdn.tailwindcss.com" />
      </head>
      <body>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </body>
    </html>
  ))
  .listen(Bun.env.PORT ?? 4321);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
