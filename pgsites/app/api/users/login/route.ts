// app/api/users/route.js

import { getUsers, createUser } from "@/lib/userController";

export async function GET(request: Request) {
    try {
        const users = await getUsers();
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(request: Request) {
    try {
        const userData = await request.json(); // Parse JSON data from request
        const newUser = await createUser(userData);
        return new Response(JSON.stringify(newUser), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to create user" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
