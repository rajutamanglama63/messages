import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
   

    async getOne(id: string) {
        const contents = await readFile("messages.json", "utf-8")
        const messages = JSON.parse(contents);
        
        return messages[id]
    }

    async findAll() {
        const contents = await readFile("messages.json", "utf-8")
        const messages = JSON.parse(contents);
        
        return messages
    }

    async createmessage(content) {
        const contents = await readFile("messages.json", "utf-8")
        const messages = JSON.parse(contents)

        const id = Math.floor(Math.random() * 9990)

        messages[id] = {id, content}

        await writeFile("messages.json", JSON.stringify(messages))
    }
}