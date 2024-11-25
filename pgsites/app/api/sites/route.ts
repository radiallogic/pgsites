import { sites } from '@/app/db/schema'; // Adjust this path as needed to match your project structure
import db from '@/app/db/index'; // Import your database connection
import { NextApiRequest, NextApiResponse } from 'next';
import { like, eq } from "drizzle-orm";



export async function GET( request: NextApiRequest) {
    const { search } = request.query; 

    const isNumeric = search !== null && !isNaN(Number(search));

    let query;
    try {
        
        if(isNumeric){
                query = eq(sites.id, Number(search) );
        }else{
            query = like(sites.name, '%' + search + '%')
        }

        const all = await db.select().from(sites).where(query).execute();

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
