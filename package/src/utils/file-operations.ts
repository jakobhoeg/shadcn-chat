import fs from 'fs-extra';
import path from 'path';

export async function writeComponentFiles(components: any[], customPath?: string) {
  const baseDir = customPath ? path.resolve(process.cwd(), customPath) : path.join(process.cwd(), 'src', 'components');

  for (const component of components) {
    for (const file of component.files) {
      const filePath = path.join(baseDir, file.name);
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, file.content);
    }
  }
}