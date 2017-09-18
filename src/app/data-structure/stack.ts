import { Node } from './node';
import { SinglyLinkedList } from './linked-list';

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
        const data = this.peek();
        this.dataArr.splice(this.top, 1);
        this.top--;
        return data
    }
    peek(): T { return (this.isEmpty()) ? null : this.dataArr[this.top] }
    isEmpty(): boolean { return this.top == 1 }
    toString() { return this.dataArr.toString() }
}

export class ListStack<T> implements Stack<T> {
    private top: Node<T>

    push(data: T) { this.top = new Node(data, this.top) }
    pop(): T {
        if (this.isEmpty()) return null
        const data = this.peek()
        this.top = this.top.next
        return data
    }
    peek(): T { return this.isEmpty() ? null : this.top.data }
    isEmpty(): boolean { return this.top == null }
    toString() {
        let str = "["
        let temp = this.top
        while (temp) { str.concat(temp.data + ", "); temp = temp.next }
        str = str.slice(0, -2)
        str.concat(" ]")
        return str
    }
}

export class LinkedListStack<T> implements Stack<T> {
    private stack = new SinglyLinkedList<T>()

    push(data: T) { this.stack.addFirst(data) }
    pop(): T {
        const data = this.peek()
        this.stack.deleteFirst()
        return data
    }
    peek(): T { return this.stack.first() }
    isEmpty(): boolean { return this.stack.isEmpty() }
    toString() { return this.stack.toString() }
}