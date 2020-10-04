https://github.com/custom-start-page/template

# Template

Template is an example of how a website that's compatible with Custom Start Page can be setup.

![preview image](/src/manifest/preview.png)

## How to create a startpage that integrates with Custom Start Page

### Getting started

1. Download a ZIP of this repository and use that as the base template for your startpage
2. Run NPM install
3. Open a terminal in the `./src` directory
4. Run `node ../node_modules/custom-start-page-server/` to start the server
5. Navigate to the URL which your terminal prints out to view your startpage

### Custom Start Page requirements

Custom Start Page expects certain criteria to be met:

- there **must** be an `index.html` file in the root of the directory
- there **must** be a `/manifest/` directory in the root of the directory with these files:
    - `defaultData.json` - the default options defined for the user, for example, a list of links
    - `meta.json` - provides meta information about this startpage such as the name and author
    - `preview.png` - a picture of how your startpage looks, provided with dimensions of 1920x1080
    - `readme.md` - a friendly document which tells the user about your startpage
    - `schema.json` - a [JSON Schema](http://json-schema.org/) that defines how the `defaultData.json` looks

### Developing with Custom Start Page

A handy script called `storage.js` has been provided which reads the users data or uses the data defined in the `defaultData.json` document.

Include the script in your website:

```
<script src="csp/js/storage.js"></script>
```

In your own script, you can then write the following:

```
new CustomStartStorage().get()
    .then(data => {
        // Use the data...
    });
```

## Hosting

This startpage needs to be hosted by a web server in order to work.

It's already hosted at https://template.customstart.page for your convenience.

### Self host

If you want to self host, just run a web server pointed at the directory of `/src` and everything should work.

## Getting started with development

You can't just open the `/src/index.html` file in your web browser as this startpage requires use of [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and also needs to make HTTP requests to some JSON files.

Firefox will give the error:

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///waves/src/manifest/defaultData.json. (Reason: CORS request not http).
```

For local development, you can use a development web server such as:

- [http-server](https://www.npmjs.com/package/http-server) (NodeJS)
- [python server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server) (Python)
- IIS, WAMP, etc

Just open a terminal in the `/src` directory and run the web server.

## Packaging

Run:

```
dist.sh
```

This will create a `/dist` folder which can be zipped and released.
