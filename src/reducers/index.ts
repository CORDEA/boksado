import State from '../state';
import {Actions, START} from '../actions';

const initialState: State = {
    scores: []
}

function reducer(state = initialState, action: Actions) {
    switch (action.type) {
        case START:
            break;
    }
}

export default reducer;
