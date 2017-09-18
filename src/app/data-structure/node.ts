export class Node<T> {
    private _data: T
    private _next: Node<T>
    private _prev: Node<T>

    constructor(data: T, next?: Node<T>, prev?: Node<T>) {
        this._data = data
        this._next = next
        this._prev = prev
    }

    get data(): T { return this._data }
    set data(data: T) { this._data = data }

    get next(): Node<T> { return this._next }
    set next(next: Node<T>) { this._next = next }

    get prev(): Node<T> { return this._prev }
    set prev(prev: Node<T>) { this._prev = prev }

    public toString(): string { return this._data.toString() }
}
