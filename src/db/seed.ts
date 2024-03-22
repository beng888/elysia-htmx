import { db } from ".";
import { users } from "./schema/auth";
import { organizations } from "./schema/organization";

const main = async () => {
  console.log("Seed start");

  await db.insert(organizations).values([
    {
      id: 1,
      name: "test",
    },
  ]);

  await db.insert(users).values([
    {
      email: "123@123.com",
      password: "123123123",
      organization_id: 1,
    },
  ]);

  console.log("Seed done");
  process.exit(0);
};

main();
