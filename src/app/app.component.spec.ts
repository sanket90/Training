import { ListStack, LinkedListStack, ArrayStack } from './data-structure/stack';
import { Postfix } from './example/postfix';
import { Prefix } from './example/prefix';

import { AddMessage, DeleteMessage, Action } from './store/message.action';
import { messageReducer } from './store/message.reducer'
import { Store } from './store/message.store';

import { TestBed, async } from '@angular/core/testing';

describe('AppComponent', () => {

  // Data Structure tests

  it('should check array stack', async(() => {
    let stack = new ArrayStack<string>()
    stack.push("abc")
    expect(stack.peek()).toBe("abc")
    expect(stack.pop()).toBe("abc")
    expect(stack.isEmpty()).toBe(true)
  }))

  it('should check linked list stack', async(() => {
    let stack = new LinkedListStack<string>()
    stack.push("abc")
    expect(stack.peek()).toBe("abc")
    expect(stack.pop()).toBe("abc")
    expect(stack.isEmpty()).toBe(true)
  }))

  it('should check list stack', async(() => {
    let stack = new ListStack<string>()
    stack.push("abc")
    expect(stack.peek()).toBe("abc")
    expect(stack.pop()).toBe("abc")
    expect(stack.isEmpty()).toBe(true)
  }))

  it('should check infix to postfix', async(() => {
    expect((new Postfix()).fromInfix("a+b")).toBe("ab+")
    expect((new Postfix()).fromInfix("a+b*c+d")).toBe("abc*+d+")
    expect((new Postfix()).fromInfix("(a+b)/(c*d)-(e+f)")).toBe("ab+cd*/ef+-")
    expect((new Postfix()).fromInfix("(c+d)-(a*b)/(a+c)")).toBe("cd+ab*ac+/-")
  }))

  it('should check infix to prefix', async(() => {
    expect((new Prefix()).fromInfix("a+b")).toBe("+ab")
    expect((new Prefix()).fromInfix("a+b*c+d")).toBe("+a+*bcd")
    expect((new Prefix()).fromInfix("(a+b)/(c*d)-(e+f)")).toBe("-/+ab*cd+ef")
    expect((new Prefix()).fromInfix("(c+d)-(a*b)/(a+c)")).toBe("-+cd/*ab+ac")
  }))

  // Reduc pattern tests
  
  it('should check type defination of actions', async(() => {
    let addAction = new AddMessage("new message")
    expect(addAction.type).toBe("ADD")
    expect(addAction.payload).toBe("new message")

    let deleteAction = new DeleteMessage(1)
    expect(deleteAction.type).toBe("DELETE")
    expect(deleteAction.payload).toBe(1)
  }))

  it('should check reducer with action Add Message', async(() => {
    expect(messageReducer([], new AddMessage("New message"))).toEqual(["New message"])
  }))

  it('should check reducer with action Delete Message', async(() => {
    expect(messageReducer(["message 0", "message 1", "message 2", "message 3"], new DeleteMessage(2)))
      .toEqual(["message 0", "message 1", "message 3"])
  }))

  it('should check Store', async(() => {
    let store = new Store([], messageReducer)
    expect(store.getState()).toEqual([])
    
    store.dispatch(new AddMessage("message 0"))
    store.dispatch(new AddMessage("message 1"))
    store.dispatch(new AddMessage("message 2"))
    store.dispatch(new AddMessage("message 3"))
    expect(store.getState()).toEqual(["message 0", "message 1", "message 2", "message 3"])

    store.dispatch(new  DeleteMessage(2))
    expect(store.getState()).toEqual(["message 0", "message 1", "message 3"])


    store.dispatch({type:"WRONG TYPE"})
    expect(store.getState()).toEqual(["message 0", "message 1", "message 3"])
  }))
});