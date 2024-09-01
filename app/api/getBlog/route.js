import * as fs from "fs";
import { promisify } from "util";
import { URL } from "url";

const readfile = promisify(fs.readFile);

export async function GET(request) {
  try {
    // Parse the JSON data
    const url = new URL(request.url, `http://${request.headers.host}`);
    const name = url.searchParams.get("slug");

    const data = await readfile(`blogData/${name}.JSON`, "utf-8");
    const jsonData = JSON.parse(data);
    // console.log(jsonData);
    // Return the JSON data as a response
    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      return new Response("File not found", {
        status: 404,
        headers: { "Content-Type": "text/plain" },
      });
    } else if (error.name === "SyntaxError") {
      // Handle JSON parsing errors
      return new Response("Invalid JSON format", {
        status: 400,
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      // Rethrow the error for unexpected issues
      throw error;
    }
  }
}
