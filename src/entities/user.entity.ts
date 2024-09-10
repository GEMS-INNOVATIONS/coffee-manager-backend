import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  celular: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  cedula: string;

  @Column()
  imagen_perfil: string;

  @Column()
  tipo_usuario: string;

  @Column()
  id_finca: number;

  @Column()
  id_pase: number;

  @Column({ unique: true })
  uuid: string;
  // Campo para almacenar UUID
}
