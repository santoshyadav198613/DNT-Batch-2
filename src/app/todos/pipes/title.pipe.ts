import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../services/ITodo';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(todoList: ITodo[], searchText: string): any {
    return todoList.filter((task) => task.title.includes(searchText));
  }

}
