import { Project } from "ts-morph";
import path from "path";

const project = new Project({});
const rootDir = path.resolve(__dirname, "..", "..", "src");

// Add source files
project.addSourceFilesAtPaths("src/**/*.md");
project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

// Slice : entities, features, pages, widgets
const sliceMap: Record<string, string> = {
  pages: "Page",
  entities: "Entity",
  features: "Feature",
  widgets: "Widget",
};

// Function to create README.md for a given slice
const createReadmeForSlice = (slice: string, project: Project) => {
  if (!Object.keys(sliceMap).includes(slice)) {
    console.error(`Invalid slice: ${slice}`);
    return;
  }

  const sliceDirPath = path.join(rootDir, slice);
  const sliceDir = project.getDirectory(sliceDirPath);

  if (!sliceDir) {
    console.error(`Directory not found for slice: ${slice}`);
    return;
  }

  const componentsDirs = sliceDir.getDirectories();

  componentsDirs.forEach((dir) => {
    const readmeFilePath = path.join(dir.getPath(), "README.md");
    const readmeFile = dir.getSourceFile("README.md");

    if (!readmeFile) {
      const sourceCode = `## ${
        sliceMap[slice]
      } ${dir.getBaseName()} is for ...`;
      const newReadmeFile = dir.createSourceFile(readmeFilePath, sourceCode, {
        overwrite: true,
      });

      newReadmeFile
        .save()
        .then(() =>
          console.log(`${dir.getBaseName()} --> README.md created!\n`)
        );
    }
  });
};

// Generate README.md for each slice
["features", "entities", "widgets", "pages"].forEach((slice) =>
  createReadmeForSlice(slice, project)
);

// Save changes to disk
project.save().then(() => console.log("Completed!\n"));
