function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(80);
  stack.push(85);
  console.log(stack.pop());
  console.log(stack.items); // items[] encapsulated and not accessible