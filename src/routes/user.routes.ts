import Elysia, { t } from "elysia";
import { userService } from "../services/user";

export default new Elysia({ name: "users" }).group("/users", (app) =>
	app
		.get("/", async () => await userService.list(), {
			detail: {
				description: "List all users",
				tags: ["User routes"],
			},
		})
		.post(
			"/",
			async ({ body, set }) => {
				console.log("%c⧭", "color: #ff0000", body);
				return await userService
					.register({
						email: body.email,
						password: body.password,
					})
					.catch((err) => {
						if (err?.message) {
							set.status = 403;
							return err.message;
						}
					});
			},

			{
				body: t.Object({
					email: t.String({ format: "email" }),
					password: t.String({ minLength: 8 }),
				}),
				detail: {
					description: "Register a new user",
					tags: ["User routes"],
				},
			},
		),
);
