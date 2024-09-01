// app/api/postcontact/route.js
import * as fs from "fs";
export async function POST(req) {
  try {
    console.log("POST request received");
    // Return a response
    const body = await req.json(); // Ensures req.body contains the parsed JSON data
    console.log(body); // This should now log the parsed JSON data

    const files = await fs.promises.readdir("postcontact");

    // Write the incoming data to a file
    await fs.promises.writeFile(
      `postcontact/${files.length + 1}.json`,
      JSON.stringify(body), // Save the parsed data
      () => {}
    );

    return new Response(JSON.stringify({ message: "POST request received" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
