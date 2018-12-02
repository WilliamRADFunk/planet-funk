export class Sound {
    /**
     * Tracks whether or not this sound is actively playing.
     */
    private isPlaying: boolean = false;
    /**
     * Audio clip belonging to this sound.
     */
    private sound;
    /**
     * Constructor for the Sound class
     * @hidden
     */
    constructor() {}
    /**
     * Getter for whether sound is actively playing or not.
     * @returns TRUE --> Clip is actively playing | FALSE --> Clip is not playing.
     */
    getIsPlaying(): boolean {
        return this.isPlaying;
    }
    /**
     * Activate the clip.
     */
    play(): void {
        this.isPlaying = true;
    }
    /**
     * Stops the clip.
     */
    stop(): void {
        this.isPlaying = false;;
    }
}