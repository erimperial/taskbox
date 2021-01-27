import { NgxsModule, Store } from '@ngxs/store';
import {moduleMetadata} from '@storybook/angular';
import { TasksState } from '../state/task.state';
import {PureInboxScreenComponent} from './pure-inbox-screen.component';
import {TaskModule} from './task.module';

export default {
    title: 'PureInboxScreen',
    decorators: [
        moduleMetadata({
            imports: [TaskModule, NgxsModule.forRoot([TasksState])],
            providers: [Store]
        })
    ]
};

export const Default = () => ({
    component: PureInboxScreenComponent
});

export const error = () => ({
    component: PureInboxScreenComponent,
    props: {
        error: true
    }
});