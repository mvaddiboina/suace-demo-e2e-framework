  import fs from "fs";
import path from "path";

// Reads a JSON file from the test-data folder and returns it as an object
export function readJsonFile(fileName: string) {
  const filePath = path.join(process.cwd(), "test-data", fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}
