import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

//only for selected layers
function isAbsolute(value: string) {
  const layers = [
    "@/app",
    "@/shared",
    "@/entities",
    "@/features",
    "@/widgets",
    "@/pages",
  ];
  return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations(); //nodes of ASTree
  importDeclarations.forEach((importDeclaration) => {
    let value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      // Remove @/ prefix
      value = value.replace("@/", "");
      //re-assigning values
      importDeclaration.setModuleSpecifier(value);
    }
  });
});

project.save();
