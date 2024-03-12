/**
 * This script manages imports and generates index files for TypeScript project slices.
 * It performs the following tasks:
 * 1. Imports necessary modules and initializes variables.
 * 2. Determines if a path is absolute based on project layers.
 * 3. Loops through each directory in the destination.
 *    - Checks if the index file already exists.
 *    - If not, creates an index file and exports modules from source files in the folder.
 * 4. Loops through each source file in the project.
 *    - Modifies import declarations to use aliases for specific layers and slices.
 * 5. Saves the project and logs a completion message.
 */

import path from "path";
import { Project } from "ts-morph";

// Define an array of project layers
const PROJECT_LAYERS = [
  "app",
  "entities",
  "features",
  "shared",
  "pages",
  "widgets",
];

const project = new Project({});
// Add source files from the specified paths to the project
project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

// Function to check if a path is absolute based on project layers
// Check if the path starts with any of the project layers
function isAbsolute(path: string) {
  return PROJECT_LAYERS.some((layer) => path.startsWith(layer));
}

// Get all the source files in the project
const files = project.getSourceFiles();
// Define the filename for the index file
const indexFilename = "index.ts";
// Get the layer from command-line arguments or set it to "shared" by default
const layer = process.argv[2] || "shared";
// Define the slice as "ui"
const slice = "ui";
// Get the destination directory for the index file
const dest = project.getDirectory(
  path.resolve(__dirname, "..", "..", "src", layer, slice)
);
// Get the directories in the destination
const directories = dest?.getDirectories();

// Loop through each directory in the destination
directories?.forEach((directory) => {
  // Get the folder name
  
  const folderName = directory.getPath();

  // Check if the index file already exists in the directory
  const isIndexFileExist = directory.getSourceFile(
    `${folderName}/${indexFilename}`
  );

  // If the index file doesn't exist
  if (!isIndexFileExist) {
    // Get source files in the folder excluding stories and test files
    const filesInFolder = directory.getSourceFiles([
      "**/*.tsx",
      "!**/*.stories.tsx",
      "!**/*.test.tsx",
    ]);

    // Initialize content for the index file
    let content = "";

    // Loop through each source file in the folder
    filesInFolder?.forEach((component) => {
      // Get the module name and module path
      const folderLen = folderName.length;
      const moduleName = component.getBaseNameWithoutExtension();
      const modulePath = `.${component.getFilePath().slice(folderLen, -4)}`;
      // Append the export statement to the content
      content += `export {${moduleName}} from "${modulePath}";\n`;
    });

    // Create a new source file for the index file
    const file = directory.createSourceFile(
      `${folderName}/${indexFilename}`,
      content,
      { overwrite: true }
    );

    // Save the file and log a message
    file.save().then(() => console.log(`${folderName} --> index.ts created!`));
  }
});

// Loop through each source file in the project
files.forEach((source) => {
  // Get import declarations from the source file
  const declarations = source.getImportDeclarations();
  // Loop through each import declaration
  declarations.forEach((declaration) => {
    // Get the module specifier value and remove the alias prefix
    let value = declaration.getModuleSpecifierValue();
    value = value.replace("@/", "");
    // Split the module specifier value into segments
    const segments = value.split("/");

    // Check if the first segment is the specified layer and the second segment is the specified slice
    const isLayer = segments?.[0] === layer;
    const isSlice = segments?.[1] === slice;

    // If the path is absolute and matches the specified layer and slice
    if (isAbsolute(value) && isLayer && isSlice) {
      // Modify the module specifier to use the alias
      const res = value.split("/").slice(0, 3).join("/");
      declaration.setModuleSpecifier(`@/${res}`);
    }
  });
});

// Save the project and log a message
project.save().then(() => console.log("Done!"));
