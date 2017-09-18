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
    private front: Node<T>
    private rear: Node<T>

    enqueue(data: T) {
        const newNode = new Node(data)
        if (this.rear == null){
            this.rear = newNode
            this.front = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }
    dequeue(): T { 
        if (this.isEmpty()) return null
        const data = this.getFirst()
        this.front = this.front.next
        if (this.isEmpty()) this.rear = null
        return data
    }
    isEmpty(): boolean { return this.front == null }
    getFirst(): T { return this.isEmpty() ? null : this.front.data }
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
