# Creating Subcommands

In FabricMC, the syntax for creating a subcommand is similar to adding an argument. This is also the case for JSCore.

```js
// module/my_module/entry.js
Command.register({
  package: "modules/my_module",
  name: "myoptions",
  execute: "nooptions.js",

  subcommands: {
    one: {
      execute: "optionone.js"
    },
    two: {
      subcommands: {
        one: {
          execute: "optiontwoone.js"
        },
        two: {
          execute: "optiontwotwo.js"
        }
      }
    }
  }
});
```

If we create files and define a function at `nooptions.js`, `optionone.js`, `optiontwoone.js` and `optiontwotwo.js`, we can run those functions by running
- /myoptions
- /myoptions one
- /myoptions two one
- /myoptions two two

## Everything Everywhere All at Once

A command can have subcommands and arguments at the same time, each argument and subcommand can in turn have their own arguments and subcommands, as shown below.

```js
// module/my_module/entry.js
Command.register({
  package: "modules/my_module",
  name: "whoa",
  execute: "nooptions.js",

  args: {
    name: {
      type: StringArgumentType.greedyString(),
      subcommands: {
        greet: {
          execute: "greet.js"
        },
        whack: {
          execute: "whack.js"
        }
      }
    }
  }

  subcommands: {
    beep: {
      execute: "beep.js"
      args: {
        bonk: {
          type: StringArgumentType.greedyString(),
          execute: "bonk.js"
        }
      }
    },
    boop: {
      subcommands: {
        beep: {
          execute: "boopbeep.js"
        },
        boop: {
          execute: "boopboop.js"
        }
      }
    }
  }
});
```

As far as I know, registered commands only updated on joining a world, if you find a way around this, please let me know.
