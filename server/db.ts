import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// No database connection for this project
export const pool = new Pool({ connectionString: "postgres://dummy" });
export const db = drizzle(pool, { schema });
