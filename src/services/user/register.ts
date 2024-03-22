import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../db/schema/auth";

interface RegisterUserDTO {
	password: string;
	email: string;
}

export default async function ({ email, password }: RegisterUserDTO) {
	const [isEmailInUse] = await db
		.select()
		.from(users)
		.where(eq(users.email, email))
		.execute();

	if (isEmailInUse) {
		throw new Error("Email already in use");
	}
	return await db
		.insert(users)
		.values({
			email,
			password: await Bun.password.hash(password),
		})
		.returning({
			id: users.id,
		})
		.execute();
}
