import { Node } from './node';

export interface Stack<T> {
    push(data: T)
    pop(): T
    peek(): T
    isEmpty(): boolean
}

export class ArrayStack<T> implements Stack<T> {
    private dataArr: T[] = Array<T>()
    private top = -1

    push(data: T) { this.dataArr[this.top++] = data }
    pop(): T {
        if (this.isEmpty()) return null
        let data = this.peek();
        this.dataArr.splice(this.top, 1);
        this.top--;
        return data
    }
    peek(): T { return (this.isEmpty()) ? null : this.dataArr[this.top] }
    isEmpty(): boolean { return this.top == 1 }
    toString() { return this.dataArr.toString() }
}

export class ListStack<T> implements Stack<T> {
    private top : Node<T>

    push(data: T) { this.top = new Node(data, this.top) }
    pop(): T {
        if (this.isEmpty()) return null
        let data = this.peek()
        this.top = this.top.next
        return data
    }
    peek(): T { return this.isEmpty() ? null : this.top.data }
    isEmpty(): boolean { return this.top == null }
}
