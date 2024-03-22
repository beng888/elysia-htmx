import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connection, db } from ".";

async function main() {
	await migrate(db, { migrationsFolder: "drizzle" });
	await connection.end();
	process.exit(0);
}

main().catch((err) => {
	console.log(err);
	connection.end();
	process.exit(0);
});
