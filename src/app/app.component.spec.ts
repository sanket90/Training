import { ListStack, LinkedListStack, ArrayStack } from './data-structure/stack';
import { Postfix } from './example/postfix';
import { Prefix } from './example/prefix';

import { TestBed, async } from '@angular/core/testing';

describe('AppComponent', () => {

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
});