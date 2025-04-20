# Taking Arguments

In the previous section we created a command that takes no arguments.

```js
Command.register({
  package: "modules/my_module",
  name: "hellocommand",
  execute: "hellocommand.js",
});
```

## Single Argument Command

We can register a command with a single argument.

```js
// module/my_module/entry.js
Command.register({
  package: "modules/my_module",
  name: "commandwithargs",
  args: {
    myArgument: {
      type: StringArgumentType.word(),
      execute: "singleargument.js",
    },
  },
});
```

This command takes one argument only with type `StringArgumentType.word()`, where "myArgument" is the name of the argument. Other argument types can be found on the [Brigadier GitHub repository](https://github.com/Mojang/brigadier/tree/master/src/main/java/com/mojang/brigadier/arguments).

```js
// module/my_module/singleargument.js
function main(ctx) {
  let argument = StringArgumentType.getString(ctx, "myArgument");
  console.log(`User said "${argument}"`);
}
```

The argument is retrieved and printed to chat.

## Using Multiple Handlers

The same command can be passed to different functions depending on the number of arguments passed.

```js
// module/my_module/entry.js
Command.register({
  package: "modules/my_module",
  name: "commandwithargs",
  execute: "hellocommand.js",

  args: {
    myArgument: {
      type: StringArgumentType.word(),
      execute: "singleargument.js",

      args: {
        myArgument2: {
          type: StringArgumentType.greedyString(),
          execute: "twoarguments.js",
        },
      },
    },
  },
});
```

- `hellocommand.js` will be called if the command is ran with no arguments.
- `singleargument.js` will be called if the command is ran with one argument.
- `twoarguments.js` is a catch-all, .greedyString() takes the rest of the command as a single argument.

```js
// module/my_module/twoarguments.js
function main(ctx) {
  let argument = StringArgumentType.getString(ctx, "myArgument");
  let argument2 = StringArgumentType.getString(ctx, "myArgument2");
  console.log(`User said "${argument}", and then "${argument2}"`);
}
```
