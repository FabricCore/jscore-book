# The JSCore Bootstrap

## What is the Bootstrap?

The JSCore Bootstrap is a collection of useful methods bringing in familiar features from Node.JS, as well as providing boilerplate for Java/JavaScript workarounds.

Provided boilerplate includes:

- Basic IO: `console.log/error`
- Import system: `require("path/to/file")`
- Declaration of Java functional interface.

The Bootstrap also include the *Core module*, providing in-game access of JSCore features.

## Using the Bootstrap

1. Download [bootstrap.zip](todo).
2. Unzip the bootstrap so your folder structure looks as below.
```
.minecraft/config/jscore/
├── init.js
├── modules/
│   └── core/
│       └── entry.js
└── sys/
    ├── init.js
    └── mod.js
```
3. Launch Minecraft.

### Loading Files

The function `require("path/to/file")` loads in other script files. It behaves differently from the "require" from Node.JS.
- Relative paths are not allowed, it must be the full path starting from `config/jscore`.
- `require` is essentially a macro that expands into the content of the file specified - the loaded file can see all variables defined in the loader file.

### Load Order

The entry point of the init script is `sys/init.js`, following the code it pulls in `sys/mod.js`, which loads in other sys files.

Finally the top level `init.js` is loaded, anything loaded including and after this file is considered non-critical, such as user defined modules. Any code you write should be loaded from `init.js`, such as user-defined modules.

## Core Commands

The *Core module* provides two notable commands - `/jseval` and `/jsload`.

### /js &lt;code&gt;

A JavaScript REPL.

Any expression entered will be evaluated and resulting value printed on screen. This is useful for debugging stubborn code that refuse to run.
```
/js 1 + 1
2
```

### /js load &lt;path&gt;

Load a script.

The script at the specified path will be ran. This is hot reload command where updated scripts can be loaded, and new commands to be registered without restarting the game.

```
/js load init.js
Script loaded
```

To allow hot reloads, `let` should be used in place of `const`. As `let` values can be overwritten but multiple definitions of `const` is not allowed.
