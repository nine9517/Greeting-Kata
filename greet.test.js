const greet = require('./greet');


test('Require 1 : Write greet medthod', ()=>{
    expect(greet("Bob"));
})

test('Require 2 : when name is null ,Method should return the string Hello, my friend', ()=>{
    expect(greet(null)).toBe("Hello, my friend.");
})

test('Require 3 : Jennyname is "JERRY" then the method should return the string "HELLO JERRY!"', ()=>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
})

test('Require 4 : when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', ()=>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
})

test('Require 5 :  when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', ()=>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})

test('Require 6 : when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', ()=>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})

test('Require 7 : when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne."', ()=>{
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
})

test('Require 8 : when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."', ()=>{
    expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.");
})