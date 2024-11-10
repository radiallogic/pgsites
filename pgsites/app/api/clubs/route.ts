import { clubs } from '@/app/db/schema'; // Adjust this path as needed to match your project structure
import db  from '@/app/db/index'; // Import your database connection

export async function GET(request: Request) {
    try {
        // Query all clubs from the clubs table
        const allClubs = await db.select().from(clubs);

        // Send the response with the list of clubs
        return new Response(JSON.stringify(allClubs), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error('Error fetching clubs:', error);
        return new Response(JSON.stringify({ error: 'Failed to retrieve clubs' }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
