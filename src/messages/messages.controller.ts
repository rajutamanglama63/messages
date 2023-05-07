import { Body, Controller, Get, Post } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Get("/:id")
    getMessage() {

    }

    @Post() 
    createMessage(@Body() body: createMessageDto) {
        console.log(body)
    }
}
