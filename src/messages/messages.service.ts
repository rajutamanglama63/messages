import { Injectable } from "@nestjs/common"
import { MessagesRepository } from "./messages.repository"

@Injectable()
export class MessagesService {

    constructor(public messagesRepo: MessagesRepository) {}

    findOne(id: string) {
        return this.messagesRepo.getOne(id)
    }

    findAll() {
        return this.messagesRepo.findAll()
    }

    create(content: string) {
        return this.messagesRepo.createmessage(content)
    }
}