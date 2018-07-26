import { Controller, Get } from '@nestjs/common';

@Controller('fighters')
export class FightersController {
  @Get()
  find() {
    return { msg: 'hello' };
  }
}
