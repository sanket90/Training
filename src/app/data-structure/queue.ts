import { Node } from './node';
import { SinglyLinkedList } from './linked-list';

export interface Queue<T> {
    enqueue(data: T)
    dequeue(): T
    isEmpty(): boolean
    getFirst(): T
}

export class ArrayQueue<T> implements Queue<T> {
    enqueue(data: T) { }
    dequeue(): T { return }
    isEmpty(): boolean { return }
    getFirst(): T { return }
}

export class ListQueue<T> implements Queue<T> {
    enqueue(data: T) { }
    dequeue(): T { return }
    isEmpty(): boolean { return }
    getFirst(): T { return }
}

export class LinkedListQueue<T> implements Queue<T> {
    private queue = new SinglyLinkedList<T>()
    enqueue(data: T) { this.queue.addLast(data) }
    dequeue(): T {
        const data = this.getFirst()
        this.queue.deleteFirst()
        return data
    }
    getFirst(): T { return this.queue.first() }
    isEmpty(): boolean { return this.queue.isEmpty() }
    toString() { return this.queue.toString() }
}
