import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import { CreateUserDto } from "./dtos/createuser.dto";
@Controller("users")
export class UserController {
    @Get()
    async GetUser(@Body() body: any) {
        console.log(body);
        return "hi"

    }

    @Post()
    async createUser(
        @Body() body: CreateUserDto,
    ) {
        console.log(body.firstname);
    }

}

