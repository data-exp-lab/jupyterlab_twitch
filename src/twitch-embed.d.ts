// Type definitions for non-npm package twitch-embed
// Project: https://dev.twitch.tv/docs/embed/
// Definitions by: Matthew Turk <https://github.com/matthewturk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.4
//declare module 'twitch-embed';

declare global {
    interface Window {
        Player: Player;
        Embed: Embed;
        embedded: Embed;
    }
}

export interface TwitchEmbedParameters {
    allowfullscreen: boolean;
    channel: string;
    collection?: string;
    height: number | string;
    layout?: string;
    parent?: string[];
    theme?: string;
    video?: string;
    width: number | string;
}

export interface TwitchPlayerParameters {
    channel: string;
    video: string;
    collection: string;
    height: number | string;
    parent: string[];
    playerdivID: string;
    width: number | string;

    playsinline?: boolean;
}

declare class Player {
    constructor(divId: string, playerOptions: TwitchPlayerParameters);

    /* Playback API */
    pause(): void;
    play(): void;
    seek(timestamp: number): void;
    setChannel(channel: string): void;
    setCollection(collectionID: string, videoID: string): void;
    setQuality(quality: string): void;
    setVideo(videoID: string, timestamp: number): void;

    /* Volume API */
    getMuted(): boolean;
    setMuted(muted: boolean): void;
    getVolume(): number;
    setVolume(volumeLevel: number): void;

    /* Status API */
    getChannel(): string;
    getCurrentTime(): number;
    getDuration(): number;
    getEnded(): boolean;
    getQualities(): string[];
    getQuality(): string;
    getVideo(): string;
    isPaused(): boolean;

    addEventListener(event: string, callback: Function): void;

    ENDED: string;
    PAUSE: string;
    PLAY: string;
    PLAYBACK_BLOCKED: string;
    PLAYING: string;
    OFFLINE: string;
    ONLINE: string;
    READY: string;

}

declare class Embed {
    constructor(divId: string, options: TwitchEmbedParameters);

    addEventListener(eventType: string, callback: Function): void;

    getPlayer(): Player;

    VIDEO_PLAY: string;
    VIDEO_READY: string;
}