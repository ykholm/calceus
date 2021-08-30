import fs from 'fs'
import path from 'path'
import shell from 'shelljs'

export class Utils {
    public static readJSONConfig<T>(path: string): T {
        if (fs.existsSync(path)) {

            const data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' })
            const jsonData: T = JSON.parse(data.toString())
            return jsonData
        }

        throw new Error(`config file: ${path} doesn\`t exists!`)
    }

    public static createDirRec(path: string): void {
        console.log(`create new dir: ${path}...`);
        shell.mkdir('-p', path)
    }

    public static copyFile(path: string, dest: string) {
        console.log(`init new file in: ${dest}...`);
        // console.debug(`cp -f ${path} ${dest}...`);
        shell.cp('-f', path, dest)
    }

    public static formRootDirPathFromFile(root: string, filePath: string): string {
        const nodePath = path.join(root, filePath)
        const pathData = nodePath.split("/")
        const fileName = pathData[pathData.length - 1]
        const dirPath = nodePath.substring(0, nodePath.length - fileName.length - 1)

        console.log('rootPath', root, 'filePath', filePath, 'dirPath', dirPath);
        
        return dirPath
    }
}