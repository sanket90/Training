import { Reducer, messageReducer } from './message.reducer';
import { Action } from './message.action';

export class Store<T> {
    private state: T;
    constructor(initialState: T, private reducer: Reducer<T>) {
        this.state = initialState;
    }

    dispatch(action: Action): void { this.state = this.reducer(this.state, action) }

    getState(): T { return this.state }
}