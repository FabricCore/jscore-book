# Code Structuring

This page is in the progress of expansion, if you have any recommended structuring practice, please add it here.

### Method Visibility

In most cases, each package should only have at most **one public object**.

Take [**modcore**](https://github.com/FabricCore/modcore) as example, the only public object is the `modcore` object. All library functions are contained in this one object.

```js
let modcore = {
  fs: {
    delete: (path) => { /* do stuff */ },
    exists: (path) => { /* do stuff */ },
  },
  net: {
    get: (url) => { /* do stuff */ },
    download: (url, path) => { /* do stuff */ },
  },
  // ...
};
```

To declare a function as private, simply don't put it on README.md, only the advertised public methods on README should be used by other packages.

To declare a variable or function only visible to that one file, **scope it**.
```js
let myModule = {};

{
  // counter is only visible to myModule.bump
  let counter = 0;

  myModule.bump = () => {
    counter++;
    console.log(`You have ran this function ${counter} times`);
  };
}
```

### Breaking Down Modules

Each module should do one task and one task only. (See [Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy))

If your module is doing more than one task, please break it down into modules.
- Dependencies of a module is **installed automatically**, and
- There is **no performance penalty** of using dependencies.
