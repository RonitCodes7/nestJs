import { Controller, Get } from "@nestjs/common";
@Controller({ path: "/users" })
export class UsersController {
    @Get("/all")
    getName() {
        return { message: "Success" };
    }
}
