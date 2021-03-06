export enum AtomPlayerStatus {
    PauseSeeking,
    Pause,
    PauseBuffering,
    PlayingBuffering,
    Playing,
    PlayingSeeking,
    Ended,
}

export enum CombinePlayerStatus {
    PauseSeeking = "PauseSeeking",
    PlayingSeeking = "PlayingSeeking",
    PauseBuffering = "PauseBuffering",
    PlayingBuffering = "PlayingBuffering",
    ToPlay = "ToPlay",
    ToPause = "ToPause",
    Pause = "Pause",
    Playing = "Playing",
    Disabled = "Disabled",
    Ended = "Ended",
}

export enum AtomPlayerSource {
    Video,
    Whiteboard,
}

export enum TriggerSource {
    None,
    Video,
    Whiteboard,
    Plugin,
}
