import * as fs from "fs";
import { promisify } from "util";
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
export async function GET(request) {
  try {
    let alldata = [];
    const data = await readdir("blogData");

    let file;
    for (let i = 0; i < data.length; i++) {
      file = await readFile("blogData/" + data[i], "utf-8");
      alldata.push(JSON.parse(file));
    }

    return new Response(JSON.stringify(alldata), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
