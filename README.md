# jupyterlab_twitch

![Github Actions Status](https://github.com/matthewturk/jupyterlab_twitch/workflows/Build/badge.svg)

A JupyterLab extension to display Twitch inline.  It provides both a Twitch widget that can be displayed and modified via code, and a standalone Twitch player.

The goals of the project are to build out a method that allows for students to watch live streaming coding sessions and interact with an instructor from within their Jupyerlab.  At present, it allows for embedding chat and video, but future developments will include deeper integration with chat using [twitch-js](https://github.com/twitch-js/twitch-js/).



## Requirements

* JupyterLab >= 2.0

## Install

```bash
jupyter labextension install jupyterlab-twitch
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab_twitch directory

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash

jupyter labextension uninstall jupyterlab-twitch
```
