import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emp_name: string;

  @Column()
  position_id: number;

  @Column()
  position_name: string;

  @ManyToOne(() => Employee, (employee) => employee.subordinates, {
    nullable: true,
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  subordinates: Employee[];
}
