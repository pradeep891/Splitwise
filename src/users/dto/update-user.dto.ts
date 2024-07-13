import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password: string;
}
