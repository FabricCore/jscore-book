# Running Non-blocking Code

JSCore runs JavaScript in a blocking manner - the entire game will wait for your JavaScript code to finish running before rendering the next frame. So a web request that takes 5 seconds will freeze your game for 5 seconds.

In this case, you can run the code in a new thread without blocking the game.

```js
myWebRequestRunnable.spawn();

// And it too can take arguments.
myWebRequestRunnable.spawn("argument 1", "argument 2");
```

## Maintaining Execution Order

If you spawn a runnable in a new thread, there is no guarantee in the order of execution.

```js
myRunnable.spawn(); // this prints out 'hi'
console.log("and then this");
```

It is possible that _'hi'_ gets printed before _'and then this'_, but it is also possible that _'and then this'_ comes before _'hi'_.

You can maintain order by using **JavaScript Callbacks**, for example.

```js
thisRunnablePrintsHiAndThen.spawn(() => {
  console.log("and then this");
});
```

> JSCore does not support `setTimeout` due to runtime restriction.

## Preventing Callback Hell

Callback hell is when there are multiple levels of callback functions, this is particularly a problem in JSCore as each time `.spawn()` is called, a new thread is spawned to run the code, which is a slow and expensive task.

Take this runnable callback hell for example.

```js
// ... some code before

runnableAndThen.spawn(() => {
  anotherRunnableAndThen.spawn(() => {
    anotherAnotherRunnableAndThen.spawn(() => {
      console.log("Reached the end");
    });
  });
});

// some code after ...
```

We used `runnableAndThen.spawn( ... )` because we don't want to block execution of the main press, this code is suboptimal because by the time we reach `console.log`, we have created 3 threads, and spawning new threads is slow.

To avoid this, `.spawn()` should be used **only when absolutely necessary**. In this case, the code can be refactored to use only a singular callback, maintain the execution of the functions, and not blocking the main thread.

```js
// ... some code before

runnableAndThen.spawn(() => {
  anotherRunnable.runF();
  anotherAnotherRunnable.runF();
  console.log("Reached the end");
});

// some code after ...
```
