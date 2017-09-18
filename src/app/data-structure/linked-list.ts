import { Node } from './node';

export interface LinkedList<T> {
    addFirst(data : T)
    addLast(data : T)
    addBefore(data : T, key : T)
    addAfter(data : T, key : T)
}

export class SinglyLinkedList<T> implements LinkedList<T> {
    private head : Node<T>

    addFirst(data : T) { this.head = new Node(data, this.head) }

    addLast(data : T) {
        if (this.head == null) this.addFirst(data)
        else {
            let temp = this.head
            while (temp.next) temp = temp.next
            temp.next = new Node(data)
        }
    }
    
    addBefore(data : T, key : T) {}
    addAfter(data : T, key : T) {}
}
