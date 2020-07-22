import { Widget } from '@lumino/widgets';

//// <reference types="./twitch-embed.d.ts"/>
import * as Twitch from './twitch-embed.js';

//const Twitch = await import('https://embed.twitch.tv/embed/v1.js');

export class TwitchPlayerWidget extends Widget {
  constructor(initialChannel: string) {
    super();
    this.channel = initialChannel;
    this.addClass('twitch-widget');

    this.div = document.createElement('div');
    this.div.setAttribute('id', 'twitch-embed');
    this.node.appendChild(this.div);
  }

  onUpdateRequest(): void {
    if (!this.embed) {
      const params: Twitch.TwitchEmbedParameters = {
        allowfullscreen: false,
        channel: this.channel,
        height: '100%',
        width: '100%',
        layout: 'video-with-chat',
      };

      this.embed = new Twitch.Embed('twitch-embed', params);
    }
  }

  onCloseRequest(): void {
    delete this.embed;
  }

  embed: Twitch.Embed;
  channel: string;
  readonly player: Twitch.Player;
  readonly div: HTMLDivElement;
}
