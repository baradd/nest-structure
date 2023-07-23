import { Get, Controller, Param } from "@nestjs/common"

@Controller("")
export class AppController {
    @Get()
    async seyHello() {
        return "Hi Nest Application"
    }
}