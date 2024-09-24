import { Controller, Module, Get } from '@nestjs/common';

@Controller('app') // this is a decorator 
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return 'hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye bye'
  }
}