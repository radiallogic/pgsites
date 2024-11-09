
import { clubs, sites, } from '@/app/db/schema'; // Adjust this path as needed to match your project structure
import db  from '@/app/db/index'; // Import your database connection



async function basicData(){

    const [sewid, avonid] = await db.insert(clubs).values([{ name: 'SEW' }, { name: 'AVON' }]).returning({ id: clubs.id }).execute();

    console.log(sewid, avonid)

    const pandyid = db.insert(sites).values([{ name: 'pandy', clubId: sewid.id, rating: 'cp', location: { x: 51.90546, y:2.992672}} ]).returning({ id: sites.id });
    const blorenge = db.insert(sites).values([{ name: 'blorenge', clubId: sewid.id, rating: 'cp + 10', location: { x: 51.804274, y:3.052774 } } ]).returning({ id: sites.id });

    const crookpeak = db.insert(sites).values([{ name: 'crookpeak', clubId: sewid.id, rating: 'p', location: { x: 51.298021,  y:-2.879174 } } ]).returning({ id: sites.id });
}



basicData()