import State from '../state';
import {Actions, SCROLL, START, STOP} from '../actions';

const initialState: State = {
    scores: [],
    inProgress: false
}

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case START:
            return {...state, inProgress: true};
        case STOP:
            return {...state, inProgress: false};
        case SCROLL:
            return {...state};
    }
    return state;
}

export default reducer;
