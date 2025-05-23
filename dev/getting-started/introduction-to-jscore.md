# Introduction to JSCore and Yarnwrap

## What is JSCore?

JSCore allows JavaScript to interact with Minecraft: Java Edition.

User-written scripts can directly access existing Java methods in Minecraft, allowing for customisation capabilities similar to that of modding. With support for hot reloading of scripts, providing a painless replacement for Java modding.

JSCore comes with [Yarnwrap](https://yarnwrap.siri.ws) - a thin wrapper translating methods from Minecraft to classes and functions callable from JS.

## Why is Yarnwrap needed?

Minecraft contains obfuscated code where naming of classes and methods are randomised to hide their purpose. Modding toolkits such as Fabric replaces readable class names (e.g. `PlayerEntity`) to the obfuscated names (e.g. `Class_1234`) at compile-time to allow readable names to be used in modding.

However, compile-time mappings are not possible for scripting languages, so Java classes and methods must be referenced by their real name.

Yarnwrap consists of thousands of classes in their readable names, each wraps an obfuscated class. When a Yarnwrap method is called, the underlying/obfuscated method gets invoked. In this case scripting languages can access internal Minecraft methods through classes provided by Yarnwrap.

## What is Rhino?

Rhino is a vanilla JavaScript runtime by Mozilla. It tightly integrates with Java - allowing Java code to be used from JS and vice versa.

The runtime evaluates JavaScript code similar to a REPL, where each script file has full access to all values defined previously. In essence all variables in Rhino are global unless specified otherwise with appropriate scoping.
