"use server"

import { MongoClient } from "mongodb"
import { revalidatePath } from "next/cache"

export async function createFormData(prevState, formData) {
  const uri= process.env.MONGO_URL

  try {
    const client = new MongoClient(uri)
    await client.connect()
    const database = client.db("humanities")
    const collection = database.collection("psychology_2")

    let message = {
      teacher: formData.get("teacher_name"),
      video_playlist: formData.get("playlist"),
      batch: formData.get("batch"),
      chapter:  formData.get("chapter_number"),
    }

    console.log(message)

    let result = await collection.insertOne(message)
    console.log(result)
    revalidatePath("/")
    return { message: "Form submitted successfully 🥳" }
  } catch (e) {
    return { message: "Failed to submit form" }
  }
}
