/**
 * 
 * 
Introduction: 
As programmers we usually use linters on our code to make sure that certain characters specifically ({[,  have their counterparts.

Question:
Create a function that serves as a linter for JavaScript which ensures that code structures are balanced specifically, code blocks starting with (, { and [.

 */
function isBalancedBrackets(str) {
  const OPENING = '[({';
  const CLOSING = '])}';
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (OPENING.includes(letter)) {
      stack.push(letter);
    }
    if (CLOSING.includes(letter)) {
      if (stack.length === 0) return false;
      let top = stack[stack.length - 1];
      if (
        (top === '[' && letter === ']') ||
        (top === '(' && letter === ')') ||
        (top === '{' && letter === '}')
      ) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
console.log(isBalancedBrackets('foo({})adfsdf'));

function isBalancedBrackets(text) {
  const closingBracketsStack = [];
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    switch (text[i]) {
      case '}':
      case ']':
      case ')':
        if (closingBracketsStack.length === 0) return false;
        let popped = closingBracketsStack.pop();
        if (text[i] != popped) return false;
        break;
      case '(':
        closingBracketsStack.push(')');
        break;
      case '[':
        closingBracketsStack.push(']');
        break;
      case '{':
        closingBracketsStack.push('}');
        break;
    }
  }
  return closingBracketsStack.length === 0;
}
console.log(isBalancedBrackets('foo({})adfsdf'));

function isBalancedBrackets(str) {
  const OPENING = new Set(['[', '(', '{']);
  const CLOSING = new Set([']', ')', '}']);
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (OPENING.has(letter)) {
      stack.push(letter);
    }
    if (CLOSING.has(letter)) {
      if (stack.length === 0) return false;
      let top = stack[stack.length - 1];
      if (
        (top === '[' && letter === ']') ||
        (top === '(' && letter === ')') ||
        (top === '{' && letter === '}')
      ) {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
console.log(isBalancedBrackets('foo({})adfsdf'));
