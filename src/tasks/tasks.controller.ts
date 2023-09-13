import { Body, Controller, Get, Post, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { UpdateTaskDto, createTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService  ) {}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }


    @Post()
    createTask(@Body() newTask:  createTaskDto){
       return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id)
    }

    @Patch(":id")
    updateTask(@Param("id") id: string, @Body() updatedFields: UpdateTaskDto) {
       return this.tasksService.updateTask(id, updatedFields )
    }


}
