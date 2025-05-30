# Core Packages

Core packages are generic-purpose utilities, this page only shows the most important command in each package.

Note that only **core** is installed by default, you may install other packages using the **pully** package manager.

## [core](https://github.com/FabricCore/modcore)

#### /js &lt;code&gt;

Evaluate JavaScript code.

#### /js web &lt;url&gt;

Run the JavaScript file at URL.

#### /js reload

Reload all JavaScript files.

## [keep](https://github.com/FabricCore/modkeep)

Keep is commonly used for managing package configurations.

#### /keep

Shows existing keep entries.

#### /keep &lt;entry&gt;

Show content in entry.

#### /keep update &lt;entry&gt; &lt;updater&gt;

Update an entry, for example.

```hs
-- Before:
-- {
--   "name": Sirius,
--   "language": Rust
-- }

/keep update "user/sirius" entry.language = "js"; entry.timezone = "GMT";
```

## [pully](https://github.com/FabricCore/pully)

#### /pully

Update all packages, and install any missing dependencies.

#### /pully install &lt;package 1&gt; &lt;package 2&gt; &lt;package 3&gt;

Install a package and its dependencies.

#### /pully uninstall &lt;package 1&gt; &lt;package 2&gt; &lt;package 3&gt;

Uninstall a package and its dependencies.

## [toggle](https://github.com/FabricCore/modtoggle)

#### /toggle

Show existing toggles.

#### /toggle enable &lt;name&gt;

Enables a toggleable.

#### /toggle disable &lt;name&gt;

Disables a toggleable.
