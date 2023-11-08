import { json } from "@sveltejs/kit";
import db from "$lib/db/mongo.js";

// GET /api/candidates
export async function GET({ request, url }) {
    const candidates = await db.resume.findMany();
    
    return json(candidates);
}   