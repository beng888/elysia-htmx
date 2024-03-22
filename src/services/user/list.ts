import { db } from "../../db";
import { users } from "../../db/schema/auth";

export default async function () {
  return await db
    .select({
      id: users.id,
      email: users.email,
    })
    .from(users)
    .execute();
}
