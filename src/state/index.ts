interface State {
    scores: Score[]
    inProgress: boolean
}

export interface Score {
    name: string
    notes: ScoreNote[]
}

export interface ScoreNote {
    type: ScoreNoteType
    direction: ScoreNoteDirection
}

export enum ScoreNoteType {
    jab,
    cross,
    hook,
    uppercut,

    weaving,
    blocking,

    empty
}

export enum ScoreNoteDirection {
    left,
    right,
    both
}

export default State;
