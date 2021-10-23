interface State {
    scores: Score[]
}

export interface Score {
    name: string
    notes: ScoreNote[]
}

export interface ScoreNote {
    type: ScoreNoteType
    direction: ScoreNoteDirection
}

enum ScoreNoteType {

}

enum ScoreNoteDirection {
    left,
    right
}

export default State;
