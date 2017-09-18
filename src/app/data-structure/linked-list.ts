import { Node } from './node';

export interface LinkedList<T> {
    addFirst(data: T)
    addLast(data: T)
    add(data: T, index: number)
    get(index: number)
    deleteFirst()
    deleteLast()
    delete(index: number)
}

export class SinglyLinkedList<T> implements LinkedList<T> {
    private firstNode: Node<T>
    private lastNode: Node<T>
    private size = 0

    addFirst(data: T) { this.add(data, 0) }

    addLast(data: T) { this.add(data, this.size) }

    add(data: T, index: number) {
        const newNode = new Node(data)

        if (this.isEmpty()) {
            this.firstNode = newNode
            this.lastNode = newNode
        } else if (index === this.size) {
            this.lastNode.next = newNode
            this.lastNode = newNode
        } else if (index === 0) {
            newNode.next = this.firstNode
            this.firstNode = newNode
        } else {
            const prev = this.get(index - 1)
            newNode.next = prev.next
            prev.next = newNode
        }
        this.size++;
    }

    get(index: number) {
        if (index < 0 || index >= this.size) return null

        if (index == (this.size - 1)) return this.lastNode

        let temp = this.firstNode
        for (let i = 0; i < index; i++) temp = temp.next

        return temp
    }

    first() { return this.firstNode ? this.firstNode.data : null }

    last() { return this.lastNode ? this.lastNode.data : null }

    deleteFirst() { this.delete(0) }

    deleteLast() { this.delete(this.size - 1) }

    delete(index: number) {
        if (this.isEmpty()) { return }
        else if (index === 0) { this.firstNode = this.firstNode.next }
        else {
            const prev = this.get(index - 1)
            prev.next = prev.next.next
        }
        this.size--;
    }

    private isEmpty() { return this.size <= 0 }
}
