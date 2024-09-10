import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/userDTO/create-user.dto';
import { UpdateUserDto } from '../dto/userDTO/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOneById(@Param('id') id: string) {
        return this.usersService.findOneById(Number(id));
    }

    // Nueva ruta para buscar por UUID
    @Get('uuid/:uuid')
    findOneByUuid(@Param('uuid') uuid: string) {
        return this.usersService.findOneByUuid(uuid);
    }

    @Put(':id')
    updateById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateById(Number(id), updateUserDto);
    }

    // Nueva ruta para actualizar por UUID
    @Put('uuid/:uuid')
    updateByUuid(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateByUuid(uuid, updateUserDto);
    }

    @Delete(':id')
    removeById(@Param('id') id: string) {
        return this.usersService.removeById(Number(id));
    }

    // Nueva ruta para eliminar por UUID
    @Delete('uuid/:uuid')
    removeByUuid(@Param('uuid') uuid: string) {
        return this.usersService.removeByUuid(uuid);
    }
}
