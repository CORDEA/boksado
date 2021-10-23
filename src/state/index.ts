interface State {
    scores: Score[]
}

export interface Score {
    name: string
    notes: ScoreNote[]
}

interface ScoreNote {
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
