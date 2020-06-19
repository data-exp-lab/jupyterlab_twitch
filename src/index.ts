import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILayoutRestorer
} from '@jupyterlab/application';

import {
  ICommandPalette, MainAreaWidget, WidgetTracker
} from '@jupyterlab/apputils';

import { Widget } from '@lumino/widgets';

//// <reference types="./twitch-embed.d.ts"/>
import * as Twitch from './twitch-embed.js';

//const Twitch = await import('https://embed.twitch.tv/embed/v1.js');

class TwitchWidget extends Widget {
  constructor() {
    super();
    this.addClass('twitch-widget');

    this.div = document.createElement('div');
    this.div.setAttribute('id', 'twitch-embed');
    this.node.appendChild(this.div);
  }

  render(): void {
    if (!this.embed) {
      const params: Twitch.TwitchEmbedParameters = {
        allowfullscreen: false,
        channel: 'mst3k',
        height: 512,
        width: 512
      };

      this.embed = new Twitch.Embed('twitch-embed', params);
    }
  }

  embed: Twitch.Embed;
  readonly player: Twitch.Player;
  readonly div: HTMLDivElement;
}

/**
 * Initialization data for the jupyterlab_twitch extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_twitch',
  requires: [ICommandPalette, ILayoutRestorer],
  autoStart: true,
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    restorer: ILayoutRestorer
  ) => {
    console.log('JupyterLab extension jupyterlab-twitch is activated!');

    let widget: MainAreaWidget<TwitchWidget>;

    const command = 'twitch:open';

    app.commands.addCommand(command, {
      label: 'Twitch',
      execute: () => {
        if (!widget) {
          const content = new TwitchWidget();
          widget = new MainAreaWidget({ content });
          widget.id = 'twitch-jupyterlab';
          widget.title.label = 'Twitch Stream';
          widget.title.closable = true;
        }
        if (!tracker.has(widget)) {
          tracker.add(widget);
        }
        if (!widget.isAttached) {
          app.shell.add(widget, 'main');
          widget.content.render();
        }
        widget.content.update();

        app.shell.activateById(widget.id);
      }
    });

    palette.addItem({ command, category: 'Tutorial' });

    const tracker = new WidgetTracker<MainAreaWidget<TwitchWidget>>({
      namespace: 'twitch'
    });
    restorer.restore(tracker, {
      command,
      name: () => 'twitch'
    });
  }
};

export default extension;
