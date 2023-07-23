import { IsString, IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsString()
    firstname: string

    @IsString({ message: "Invalid input" })
    @IsNotEmpty({ message: "data is required" })
    lastname: string
}