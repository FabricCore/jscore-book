# The Init System

## What are Init Scripts?

*Init scripts* are programmable config files, where the desired behaviour can be described in terms of code. They allow existing features to be customised, new logic to be added, while being trivially simple to extend.

An *init script* is invoked when the game starts, which may in turn run code from other files. Event listeners can be registered and threads can be spawned so the init script continues to run after the game has completed loading.

## Hello JSCore!

In this section we will be writing an *init script* printing "Hello JSCore!" on game launch.

1. Create a file at `.minecraft/config/jscore/sys/init.js`, and open it in a text editor.
2. Paste the following code in the file.
```js
let Core = Packages.ws.siri.jscore.Core;
Core.log("Hello JSCore!");
```
3. Launch the game - you should see the line "Hello JSCore!" in logs.

### Explanation

The first line is similar to an import statement in Java, defining `Core` to be an alias where `ws.siri.jscore.Core` is the full qualified name of the Java class. `Core` includes the function `Core.log` that writes string content to log.

> `Packages` is an entry point to importing Java classes.

The second line calls method `Core.log` defined in line 1, simple as that.
