import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
    title: string = '';
    @Input()
    task!: Task;

    @Output() onPinTask: EventEmitter<any> = new EventEmitter();

    @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    onPin(id: any) {
        this.onPinTask.emit(id);
    }

    onArchive(id: any) {
        this.onArchiveTask.emit(id);
    }
}