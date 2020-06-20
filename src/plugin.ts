import { IJupyterWidgetRegistry } from '@jupyter-widgets/base';

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILayoutRestorer
} from '@jupyterlab/application';

import {
  ICommandPalette,
  MainAreaWidget,
  WidgetTracker,
  InputDialog
} from '@jupyterlab/apputils';

import * as widgetExports from './widget';
import { TwitchPlayerWidget } from './player';

import { MODULE_NAME, MODULE_VERSION } from './version';
const EXTENSION_ID = MODULE_NAME + ':plugin';

const extension: JupyterFrontEndPlugin<void> = {
  id: EXTENSION_ID,
  requires: [ICommandPalette, ILayoutRestorer, IJupyterWidgetRegistry],
  autoStart: true,
  activate: async (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    restorer: ILayoutRestorer,
    registry: IJupyterWidgetRegistry
  ) => {
    console.log('JupyterLab extension jupyterlab-twitch is activated!');
    registry.registerWidget({
      name: MODULE_NAME,
      version: MODULE_VERSION,
      exports: widgetExports
    });

    const command = 'twitch:open';

    app.commands.addCommand(command, {
      label: 'Twitch',
      execute: async () => {
        let widget: MainAreaWidget<TwitchPlayerWidget>;
        if (!widget) {
          const result = await InputDialog.getText({
            title: 'Channel',
            text: 'mst3k'
          });
          if (!result.button.accept) {
            return;
          }
          const content = new TwitchPlayerWidget(result.value);
          widget = new MainAreaWidget({ content });
          widget.id = 'twitch-jupyterlab';
          widget.title.label = 'Twitch: #' + content.channel;
          widget.title.closable = true;
        }
        if (!tracker.has(widget)) {
          tracker.add(widget);
        }
        if (!widget.isAttached) {
          app.shell.add(widget, 'main');
        }
        widget.content.update();

        app.shell.activateById(widget.id);
      }
    });

    palette.addItem({ command, category: 'Twitch' });

    const tracker = new WidgetTracker<MainAreaWidget<TwitchPlayerWidget>>({
      namespace: 'twitch'
    });
    restorer.restore(tracker, {
      command,
      name: () => 'twitch'
    });
  }
};

export default extension;
