import { DOMWidgetModel, DOMWidgetView } from '@jupyter-widgets/base';
import { UUID } from '@lumino/coreutils';

import { MODULE_NAME, MODULE_VERSION } from './version';

import * as Twitch from './twitch-embed.js';

export class TwitchPlayerModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: TwitchPlayerModel.model_name,
      _model_module: TwitchPlayerModel.model_module,
      _model_module_version: TwitchPlayerModel.model_module_version,
      _view_name: TwitchPlayerModel.view_name,
      _view_module: TwitchPlayerModel.view_module,
      _view_module_version: TwitchPlayerModel.view_module_version,
      channel: 'mst3k',
      width: 500,
      height: 500,
      volume: 0.2,
      muted: false
    };
  }

  channel: string;
  width: number;
  height: number;
  volume: number;
  muted: boolean;

  static model_name = 'TwitchPlayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'TwitchPlayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class TwitchPlayerView extends DOMWidgetView {
  render(): void {
    this.div = document.createElement('div');
    this.divId = 'twitch-player-' + UUID.uuid4();
    this.div.setAttribute('id', this.divId);
    this.el.appendChild(this.div);
    const params: Twitch.TwitchEmbedParameters = {
      allowfullscreen: false,
      channel: this.model.get('channel'),
      height: this.model.get('height'),
      width: this.model.get('width'),
      layout: 'video'
    };
    this.displayed.then(() => {
      this.embed = new Twitch.Embed(this.divId, params);
      this.player = this.embed.getPlayer();
    });

    this.setupListeners();
  }

  setupListeners(): void {
    this.model.on_some_change(
      ['volume', 'channel', 'muted'],
      this.updatePlayerParameters,
      this
    );
  }

  updatePlayerParameters(): void {
    this.player.setVolume(this.model.get('volume'));
    this.player.setChannel(this.model.get('channel'));
    this.player.setMuted(this.model.get('muted'));
  }

  div: HTMLDivElement;
  divId: string;
  model: TwitchPlayerModel;
  embed: Twitch.Embed;
  player: Twitch.Player;
}
