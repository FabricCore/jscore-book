# Example Project - EmojiChat

Project repo: [Siriusmart/EmojiChat](https://github.com/Siriusmart/emojichat)

### Goal

- Bring Discord emoji formatting to Minecraft chat.
- For example, writing message `Hello world :wave:` will cause `Hello world 👋` to be sent instead.

### Approach

1. Create a toggle using [modtoggle](https://github.com/FabricCore/modtoggle).
2. Listen to **ClientSendMessageEvents.MODIFY_CHAT** to modify messages before send.
3. Config using [modkeep](https://github.com/FabricCore/modkeep) to allow users to add emoji names.

## Implementation

You may start from the [**package template**](https://github.com/FabricCore/package-template/) provided.

```
.minecraft/config/jscore/
└── modules/
    └── emojichat/
        └── package.json
```

1. Declare **package.json** with all the required dependencies.

```json
{
  "name": "emojichat",
  "version": "0.1.0",
  "authors": ["Sirius"],
  "description": "Use Discord style emoji in chat.",
  "license": "AGPL-3.0-or-later",
  "keywords": ["chat"],

  "entry": "entry.js",
  "dependencies": {
    "keep": "0.1.0",
    "yarn": "0.1.0",
    "toggle": "0.1.0",
    "yarntogglepass": "0.1.0"
  },

  "repository": "https://github.com/Siriusmart/emojichat",
  "homepage": null
}
```

> **yarntogglepass** is required because multiple toggles may listen to `MODIFY_CHAT` at the same time. **yarntogglepass** allows multiple listeners to modify the same message.

2. Declare the toggle, see [modtoggle](https://github.com/FabricCore/modtoggle/) for more info.

```js
let emojichat = {
  name: "emojichat",
  displayName: "EmojiChat",

  onActivate: () => {},
  onDeactivate: () => {},
};

modtoggle.registerToggle(emojichat);
```

3. Set up listeners.

```js
let emojichat = {
  // ...

  processMessage: (message) => {
    // TODO
    return message;
  }

  onSendMessage: (message) => {
    return emojichat.processMessage(message);;
  },

  onActivate: () => {
    modtoggle.registerListener(
      ClientSendMessageEvents.MODIFY_CHAT,
      emojichat.onSendMessage,
      "emojichat-onSend",
      yarnwrap.Core,
    );
  },

  onDeactivate: () => {
    modtoggle.deregisterListener(
      ClientSendMessageEvents.MODIFY_CHAT,
      "emojichat-onSend",
    );
  },
};
```

4. Create a `default.json` holding key-emoji pairs.

```js
{
  "100": "💯",
  "1234": "🔢",
  "grinning": "😀",
  "smiley": "😃",
  "smile": "😄",
  "grin": "😁",
  "laughing": "😆",
  "satisfied": "😆",
  "sweat_smile": "😅",
  // ...
}
```

5. Load `default.json` and use it as the default value for config.

```js
let emojichat = {
  // ...

  defaultEmojis: require("modules/emojichat/default.json"),

  processMessage: (message) => {
    let config = modkeep.get("emojichat/emojis", emojichat.defaultEmojis);
    // see project repo for actual code
    return message;
  },
};
```

## Publishing to Package Repository

1. Writing the README according to the [package template](https://github.com/FabricCore/package-template/).
2. Add the package to [FabricCore/repo](https://github.com/FabricCore/repo) by either
    - Opening a pull request to update [index.json](https://github.com/FabricCore/repo/blob/master/index.json).
    - Open an issue with the URL to your Git repository.

If a license is not specified, your package is assumed to be licensed under the semi-permissive [GNU Lesser General Public License](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License).
