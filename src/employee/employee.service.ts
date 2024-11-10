// employee.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Recursive function to build employee hierarchy
  private async getSubordinates(employeeId: number): Promise<Employee[]> {
    const employee = await this.employeeRepository.findOne({
      where: { id: employeeId },
      relations: ['subordinates'],
    });

    if (employee && employee.subordinates.length > 0) {
      employee.subordinates = await Promise.all(
        employee.subordinates.map(async (subordinate) => {
          subordinate.subordinates = await this.getSubordinates(subordinate.id);
          return subordinate;
        }),
      );
    }
    return employee.subordinates;
  }
  async getEmployeeHierarchy(employeeId: number): Promise<Employee[]> {
    return this.getSubordinates(employeeId);
  }
}
