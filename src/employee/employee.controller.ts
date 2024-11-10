// employee.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // Endpoint to get an employee by ID and their subordinates
  @Get(':id')
  async getEmployeeHierarchy(@Param('id') id: number): Promise<Employee[]> {
    return this.employeeService.getEmployeeHierarchy(id);
  }
}
