import fs from 'node:fs/promises';

async function createNew(path) {
    try {
        await fs.mkdir(path);
        console.log(`Created a new Folder: ${path}`);
    } catch (error) {
        console.error(`Sorry, creating a new folder is not possible. ${error.message}`);
    }
}
createNew("assets")
    //     try {
    //         await fs.mkdir('./Lev3_1/assets', { recursive: true })
    //     } catch (error) {
    //         console.error(error.message)
    //     }
    // }



