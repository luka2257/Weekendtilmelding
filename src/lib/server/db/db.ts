import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { POSTGRES_URL } from "$env/static/private";

const queryClient = postgres(POSTGRES_URL);
export const db = drizzle(queryClient, { schema });