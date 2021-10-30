import State from '../state';
import {Actions, SCROLL, START, STOP} from '../actions';

const initialState: State = {
    scores: [],
    currentScoreId: 0,
    currentNoteIndex: 0,
    inProgress: false
}

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case START:
            return {...state, inProgress: true};
        case STOP:
            return {...state, inProgress: false};
        case SCROLL:
            const score = state.scores.find((v) => v.id === state.currentScoreId);
            if (score) {
                return {
                    ...state,
                    currentNoteIndex: score.notes.length > state.currentNoteIndex + 1
                        ? state.currentNoteIndex + 1
                        : state.currentNoteIndex
                };
            }
    }
    return state;
}

export default reducer;
