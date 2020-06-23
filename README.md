# jupyterlab_twitch

![Github Actions Status](https://github.com/data-exp-lab/jupyterlab_twitch/workflows/Build/badge.svg)

A JupyterLab extension to display Twitch inline.  It provides both a Twitch widget that can be displayed and modified via code, and a standalone Twitch player.

The goals of the project are to build out a method that allows for students to watch live streaming coding sessions and interact with an instructor from within their Jupyerlab.  At present, it allows for embedding chat and video, but future developments will include deeper integration with chat using [twitch-js](https://github.com/twitch-js/twitch-js/).

## Requirements

* JupyterLab >= 2.0

## Install

```bash
jupyter labextension install @data-exp-lab/jupyterlab-twitch
```

## Usage

You can either use the "Twitch" option in the command palette, which will prompt you for a Channel, or you can import and use the Twitch widget.  Using the Twitch widget is preferred for most things, but it is also somewhat harder to move around.

```python
import jupyterlab_twitch
player = jupyterlab_twitch.TwitchPlayerModel()
player.channel = "mst3k"
player.volume = 0.9
display(player)
```

Only a few attributes are exposed on the `TwitchPlayerModel`, and it will likely change its name as chat and other features are added.  Right now you can change the channel, the volume, and mute or unmute.  You can create a new output for the Twitch stream and drag that around, and you can also have multiple going.

This uses the IFrame embedding library, so may not work on non-localhost domains.

Style for the widget-based viewer is still a bit clunky, and will be worked on in subsequent versions.

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

jupyter labextension uninstall @data-exp-lab/jupyterlab-twitch
```
