# Event Providers

> Package **yarn** is required for this guide, run `/pully install yarn` to install the package.
>
> You should also add **yarn** as a dependency in package.json.

FabricMC allows you to listen to events by defining a function which is ran whenever the event occurs.

In JSCore, you can define a runnable which will be ran whenever a specific event occurs. Each different type of event requires different types of runnable.

- **jscore.Core** (or just **Core**) provides runnables for registering commands.
- **yarnwrap.Core** provides runnables for all Fabric API events.

When creating runnables, you can specify which **Core** should the runnable use.

```js
// `Core` aliases to `jscore.Core`
let jscoreRunnable = Core.runnable.create(
  "jscore-runnable",
  "function main() { console.log('hi') }",
);

let yarnwrapRunnable = yarnwrap.Core.runnable.create(
  "jscore-runnable",
  "function main() { console.log('hi') }",
);
```

Runnables created using `requireRunnable()` can use an additional argument to specify the Core.

```js
// not specified: defaults to jscore.Core
let jscoreRunnable = requireRunnable("file.js");
let yarnwrapRunnable = requireRunnable("file.js", yarnwrap.Core);
```

## Listening to Events

Suppose we want to run some code on every tick, in the [Fabric API events index](https://wiki.fabricmc.net/tutorial:event_index) we can listen to [ClientTickEvents.END_WORLD_TICK](https://github.com/FabricMC/fabric/blob/1.21.5/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java#L79), which is called at the end of every world tick.

If we want to print out our coordinates at every tick, we can write a function that is ran every world tick.

```js
// modules/my_module/onTick.js

// although END_WORLD_TICK gives ClientWorld as a parameter,
// We don't actually need it.
function onTick(_world) {
  let playerEntity = yarn.playerEntity;
  let x = Math.round(playerEntity.x);
  let y = Math.round(playerEntity.y);
  let z = Math.round(playerEntity.z);
  console.log(`x=${x}, y=${y}, z=${z}`);
}
```
> **yarn.playerEntity** is provided by [**yarn.js**](https://github.com/fabricCore/yarn.js), see [Yarnwrap index](https://fabriccore.github.io/yarnwrap) for methods provided by each class.

Because we are listening to a Fabric API event, create a runnable with **yarnwrap.Core**.

```js
// modules/my_module/entry.js
let onTickRunnable = requireRunnable(
  "modules/my_module/onTick.js",
  yarnwrap.Core,
);

ClientTickEvents.END_WORLD_TICK.register(onTickRunnable);
```

> **ClientTickEvents** along with other event imports are provided by [**yarn.js**](https://github.com/fabricCore/yarn.js).

However the listener is re-registered each time the script is reloaded, and it is not possible to remove a listener once added. Therefore it is recommended to use [**modtoggle**](https://github.com/FabricCore/modtoggle/) to listen to events.
