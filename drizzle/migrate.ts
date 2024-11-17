import 'dotenv/config'
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from 'postgres';

// Manually construct the PostgreSQL URL
const POSTGRES_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.SERVER_IP}:${process.env.DB_SERVER_PORT}/${process.env.POSTGRES_DB}`;
console.log(`Connecting to database with URL: ${POSTGRES_URL}`);


// Migration client (code from the documentation)
const migrationclient = postgres(POSTGRES_URL as string, { max: 1 }); 

async function main() {
    // Call migrate function using the migrationclient
    await migrate(drizzle(migrationclient), {
        migrationsFolder: 'drizzle/' // Give the function the migration folder location
    })

    // Close the connection
    await migrationclient.end();
}

main();