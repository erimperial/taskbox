import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Task } from "../models/task.model";

@Component({
    selector: 'app-pure-task-list',
    templateUrl: './task-list.component.html'
})
export class PureTaskListComponent implements OnInit {
    tasksInOrder: Task[] = [];
    @Input() loading = false;

    @Output() onPinTask: EventEmitter<any> = new EventEmitter();
    @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

    @Input()
    set tasks(arr: Task[]) {
        this.tasksInOrder = [
            ...arr.filter(t => t.state === 'TASK_PINNED'),
            ...arr.filter(t => t.state !== 'TASK_PINNED')
        ];
    }


    constructor() {}
    ngOnInit() {}
}