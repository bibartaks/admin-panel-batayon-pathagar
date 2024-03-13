// const { MongoClient } = require("mongodb");
// import { NextResponse } from "next/server";
// const uri = process.env.MONGO_URL;

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const chapter = searchParams.get("chapter");
//   const subject = searchParams.get("subject");

//   const client = new MongoClient(uri);
//   try {
//     const database = client.db("hsc" || "humanities");
   
//     // const physics_1_chapter_1 = database.collection("physics_1");
//     // const physics_1_chapter_1 = database.collection(`${subject}`);
//     const physics_1_chapter_1 = database.collection(`geography_1`);

//     // Query for a movie that has the title 'Back to the Future'
//     // const query = { chapter: `${chapter}` };
//     const query = {}
//     const playlists = await physics_1_chapter_1.find(query).toArray();

//     return NextResponse.json({ playlists });
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }


const { MongoClient } = require("mongodb");
import { NextResponse } from "next/server";
const uri = process.env.MONGO_URL;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject");

  const client = new MongoClient(uri);
  try {
    await client.connect();

    // First, try to access the collection in the "hsc" database
    let database = client.db("hsc");
    let collection = database.collection(`${subject}`);
    const playlists = await collection.find({}).toArray();

    // If no playlists found in "hsc" database, fall back to "humanities"
    if (playlists.length === 0) {
      database = client.db("humanities");
      collection = database.collection(`${subject}`);
      // collection = database.collection(`geography_1`);
      const playlistsHumanities = await collection.find({}).toArray();
      return NextResponse.json({ playlists: playlistsHumanities });
    }

    return NextResponse.json({ playlists });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
