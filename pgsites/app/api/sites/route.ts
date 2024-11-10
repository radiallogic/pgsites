import { sites } from '@/app/db/schema'; // Adjust this path as needed to match your project structure
import db from '@/app/db/index'; // Import your database connection

export async function GET( request: Request) {

    console.log('request', request);

    try {
        // Query all clubs from the clubs table
        const all = await db.select().from(sites).execute();

        // Send the response with the list of clubs
        return new Response(JSON.stringify(all), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error('Error fetching sites:', error);
        return new Response(JSON.stringify({ error: 'Failed to retrieve sites' }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
