# Webpack for Everyone notes

**Source:** https://laracasts.com/series/webpack-for-everyone/episodes/1

## Video overview

1. Zero config setup
2. A dedicated configuration file
3. Importing modules
4. Using loaders
5. ES2015 compilation with Babel
6. Minification and environments
	- Plugins, minify, concat, etc.
	- Loaders, transform files
7. Sass compilation

## Babel

- Create a `.babelrc` with a `presets` property.
- Install `babel-core` and `babel-loader` packages.
- Add some config to `webpack.config.js` to tell Babel which files it should transpile (and which to ignore). By default it won't transpile anything, so make sure this is configured inside
`.babelrc`.

### Loaders
"Transform" one file into another by modifying its contents, for example
- `sass-loader`, compiles `scss` into `css` files
- `css-loader`, updates imports, minifys CSS and wraps in a CommonJS module
- `style-loader`, injects CSS into the DOM

## Misc notes

- Loaders introduce functionality to transform any type of file (for example CSS or HTML)
- Babel allows you to use newer ECMAScript features without needing browser support (e.g using the new `class` syntax), it transpiles your modern JavaScript into JavaScript that is understood
by all browsers.
- Environment variables aren't set as easily on Windows :), export using `export KEY=value` in Git Bash before running `npm run build`.
- The `entry` property on the configuration object allows you to set values for dynamic variables, e.g. a property of `app` would compile your assets to `app.css` and `app.js` if you
set their name to `[name].(css|js)`. There are many more variables, such as `[hash]`, `[extension]` etc.
- Use raw loader instead of css loader if that project wasn't built with webpack in mind
- You can generate a `manifest.json`, which contains the dynamic, versioned file names of the created chunks. In *language of choice* you can read that file and reference them in your templates.