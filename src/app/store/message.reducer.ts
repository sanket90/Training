import * as act from './message.action';

export interface Reducer<T> {
    (state : T, action : act.Action) : T
}

export let messageReducer : Reducer<string[]> = (state : string[], action : act.Action) : string[] => {
    if (action.type === "ADD") {
        return [...state, action.payload]
    }
    if (action.type === "DELETE") {
        return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1, state.length)
        ]
    }
    return state
} 