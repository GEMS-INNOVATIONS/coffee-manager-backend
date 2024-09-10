import { Injectable, NotFoundException } from '@nestjs/common'; // Asegúrate de tener esta línea
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/userDTO/create-user.dto';
import { UpdateUserDto } from '../dto/userDTO/update-user.dto';
import { User } from '../entities/user.entity'; // Importa la entidad User

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) // Inyectamos el repositorio de la entidad User
        private readonly usersRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create(createUserDto); // Crea una instancia de usuario
        return await this.usersRepository.save(newUser); // Guarda el nuevo usuario en la BD
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find(); // Obtiene todos los usuarios
    }

    async findOneById(id: number): Promise<User> {
        return await this.usersRepository.findOneBy({ id }); // Busca un usuario por ID
    }

    // Nuevo método para encontrar por UUID
    async findOneByUuid(uuid: string): Promise<User> {
        return await this.usersRepository.findOneBy({ uuid }); // Busca un usuario por UUID
    }

    async updateById(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const userToUpdate = await this.usersRepository.preload({
            id, // Busca el usuario por su ID
            ...updateUserDto, // Actualiza los campos con los datos del DTO
        });

        if (!userToUpdate) {
            return null;
        }

        return await this.usersRepository.save(userToUpdate); // Guarda los cambios en la BD
    }

    // Nuevo método para actualizar por UUID
    async updateByUuid(uuid: string, updateUserDto: UpdateUserDto): Promise<User> {
        const userToUpdate = await this.usersRepository.findOneBy({ uuid });

        if (!userToUpdate) {
            throw new NotFoundException(`Usuario con UUID ${uuid} no encontrado`);
        }

        // Actualiza manualmente los campos
        Object.assign(userToUpdate, updateUserDto);

        return await this.usersRepository.save(userToUpdate); // Guarda los cambios en la BD
    }

    async removeById(id: number): Promise<void> {
        const user = await this.usersRepository.findOneBy({ id });
        if (user) {
            await this.usersRepository.remove(user); // Elimina el usuario
        }
    }

    // Nuevo método para eliminar por UUID
    async removeByUuid(uuid: string): Promise<void> {
        const user = await this.usersRepository.findOneBy({ uuid });
        if (user) {
            await this.usersRepository.remove(user); // Elimina el usuario
        }
    }
}
