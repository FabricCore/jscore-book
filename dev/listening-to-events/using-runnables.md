# Using Runnables

A runnable is a compiled JS function, a runnable can be created with a _unique name_ and the function source.

```js
let myRunnable = Core.runnable(
  "my-runnable",
  "function main() { console.log('hi') }",
);
```

Or it can compile a file to a runnable function.

```js
let myRunnable = requireRunnable("modules/myModule/myRunnable.js");
```

And in `modules/myModule/myRunnable.js`

```js
function main() {
  console.log("hi");
}
```

> The file can contain **one function only** declared with the `function name() { ... }` syntax, and nothing else.

## Creating a Runnable

A runnable can be called as a normal JS function

```js
myRunnable.runF(); // 'hi'
```

It can also take arguments

```js
let myRunnable = Core.runnable(
  "my-other-runnable",
  "function main(a, b) { console.log(`${a} and ${b}`) }",
);

myOtherRunnable.runF("argument 1", "argument 2");
```

