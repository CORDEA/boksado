import State from '../state';
import {Actions, START} from '../actions';

const initialState: State = {
    scores: [],
    inProgress: false
}

function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case START:
            return {...state, inProgress: true};
    }
    return state;
}

export default reducer;
