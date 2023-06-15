import { Get, Controller, Param } from "@nestjs/common"

@Controller("/app")
export class AppController {
    @Get(":id")
    async seyHello() {
        return "Hi Nest Application"
    }
}