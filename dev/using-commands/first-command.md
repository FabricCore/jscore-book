# Your First Command

## Creating a Module

Whilst the init script system does not enforce a specific folder structure, it is a good practice to organise your code into modules. For example, `modules/core/` contains code for the _Core module_.

To create a new module, create a new file at `modules/my_module/entry.js` - which will be the entry point of this module.

```
.minecraft/config/jscore/
└── modules/
    ├── core/
    │   └── entry.js
    └── my_module/
        └── entry.js
```

## Hello Command!

Let's create a command that prints "Hello Command!" to chat when ran.

```js
// modules/my_module/entry.js
Command.register({
  package: "modules/my_module",
  name: "hellocommand",
  execute: "hellocommand.js",
});
```

- Where `package` is the path to our package (from `.minecraft/config/jscore`),
- `name` is the name of the command to be registered, here `/hello_command` is the name of the command,
- `execute` contains the command logic, which we will define below.

```js
// modules/my_module/hellocommand.js
function main() {
  console.log("Hello Command!");
}
```

When the command is ran, this main function will be called. This file can only contain the main function and nothing else.

## Package Manifest Format

You will need to specify all of the following details in `modules/my_module/package.json`.

```json
{
  "name": "my_module",
  "version": "0.1.0",
  "authors": [ "Sirius", "Bob" ],
  "description": "My first module",
  "keywords": [ "list", "of", "words"],

  "entry": "entry.js",
  "dependencies": {
    "core": "0.1.0"
  },
  "javaDependencies": [],

  "repository": "https://github.com/yourname/repo",
  "homepage": "https://yourname.com/projectname"
}
```

> You only need to specify the JS and Java packages that you use **directly**, packages you use indirectly through dependencies don't have to be specified.

Now this command will be loaded on game launch, the command can also be registered without restarting the game with the in-game command `/jsload init.js`. Do note that rejoining a world is required to register the updated command.
