import { Sound } from "./sound";

/**
 * @class
 * The sound effects and music system.
 */
class Soundinator {
    /**
     * Contains the boom sound.
     */
    private boom: Sound;
    /**
     * Tracks whether game is in silent mode or not.
     */
    private isMute: boolean = true;
    /**
     * Registered list of things that can are collidable.
     */
    private queuedSounds: Sound[] = [];
    /**
     * Constructor for the Soundinator class
     * @hidden
     */
    constructor() {}
    /**
     * Plays the explosion sound.
     * @param muffled inert explosions should have a shallower sound.
     */
    playBoom(muffled?: boolean): void {
        if (this.isMute) { return; }

        this.queuedSounds.push(this.boom);
    }
    /**
     * Toggles sound for the entire game.
     * @param mute TRUE --> mute the game | FALSE --> turn sound on
     */
    toggleMute(mute: boolean): void {
        this.isMute = mute;
    }
}
export const SoundinatorSingleton = new Soundinator();