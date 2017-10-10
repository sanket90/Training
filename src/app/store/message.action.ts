export interface Action {
    type: string;
    payload?: any;
}

export class AddMessage implements Action { 
    type: string = "ADD" 
    constructor(public payload: string) {}
}

export class DeleteMessage implements Action { 
    type: string = "DELETE" 
    constructor(public payload: number) {}
}

