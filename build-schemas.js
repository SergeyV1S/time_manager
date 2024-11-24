/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const schemaDir = path.join(process.cwd(), "src/db/schemas");
const outputFile = path.join(process.cwd(), "prisma/schema.prisma");

let existingSchema = "";
if (fs.existsSync(outputFile)) {
  existingSchema = fs.readFileSync(outputFile, "utf-8");
}

const generatorSection = existingSchema.match(/generator\s+client\s+\{[\s\S]*?\}/)?.[0] || "";
const datasourceSection = existingSchema.match(/datasource\s+db\s+\{[\s\S]*?\}/)?.[0] || "";

const files = fs.readdirSync(schemaDir).filter((file) => file.endsWith(".prisma"));

let schema = "";

for (const file of files) {
  const filePath = path.join(schemaDir, file);
  const content = fs.readFileSync(filePath, "utf-8");
  schema += content + "\n";
}

const finalSchema = `${generatorSection}\n\n${datasourceSection}\n\n${schema}`.trim();

fs.writeFileSync(outputFile, finalSchema);
