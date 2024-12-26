import { Get, Post, Put, Body, Param, Controller, Res, HttpCode, HttpStatus, HttpException, UseFilters, UsePipes } from "@nestjs/common"
import { CreateCatDto } from "src/dto/cats.create.dto"
import { CatsService } from "src/Service/cats.services"
import { Cat } from "src/Interfaces/cats.interfaces";
import { BadRequestException } from "src/Exception/cats.exception";
import { HttpExceptionFilter } from "src/Exception/cats.exception-filter";
import { ValidationPipe, JoiValidationPipe } from "src/Pipe/validation.pipe";
import { createCatSchema } from "src/dto/cats.create.dto";
@UseFilters(new HttpExceptionFilter())
@Controller("/cats")
export class CatsController {
    constructor(private catsService: CatsService){}
    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    create(@Body() createCatDto: CreateCatDto){
    if( !createCatDto.hasOwnProperty("age") ){
      throw new BadRequestException()
    }
    this.catsService.createCats(createCatDto);
    return createCatDto
    }

  
    @Get()
    findAll() {
      return this.catsService.findAllCats();
    }
}