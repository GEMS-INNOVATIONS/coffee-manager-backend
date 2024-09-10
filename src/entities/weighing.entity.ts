// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { User } from 'src/entities/user.entity';  // entidad User
// import { PassCoffee } from 'src/entities/passCoffee.entity';  // entidad PassCoffee
// import { Farm } from 'src/entities/farm.entity';  // entidad Farm

// @Entity('Weighings')
// export class Weighing {
//   @PrimaryGeneratedColumn()
//   idWeighings: number;

//   @Column({ type: 'varchar', length: 45 })
//   dayTime: string;

//   @Column({ type: 'decimal', precision: 9, scale: 2 })
//   amountKg: number;

//   @Column({ type: 'date' })
//   date: Date;

//   @ManyToOne(() => User, (user) => user.weighings)
//   user: User;

//   @ManyToOne(() => PassCoffee, (passCoffee) => passCoffee.weighings)
//   passCoffee: PassCoffee;

//   @ManyToOne(() => Farm, (farm) => farm.weighings)
//   farm: Farm;
// }
