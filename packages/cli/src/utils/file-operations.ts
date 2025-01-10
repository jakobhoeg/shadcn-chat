import fs from "fs-extra";
import path from "path";

export async function writeComponentFiles(components: any[], baseDir: string) {
  for (const component of components) {
    // Determine the target directory based on the component type
    const targetDir = path.join(
      baseDir,
      component.type === "hooks" ? "hooks" : "",
    );

    // Ensure the target directory exists
    await fs.ensureDir(targetDir);

    for (const file of component.files) {
      const filePath = path.join(targetDir, file.name);
      await fs.writeFile(filePath, file.content);
    }
  }
}
