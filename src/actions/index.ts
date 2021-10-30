import {Dispatch} from 'redux';

export const START = 'Start';
export const SCROLL = 'Scroll';

interface Start {
    type: typeof START
}

interface Scroll {
    type: typeof SCROLL
}

let timer: number | null = null;

export function start(dispatch: Dispatch) {
    if (timer != null) {
        window.clearInterval(timer)
    }
    timer = window.setInterval(() => dispatch(scroll()), 500)
    dispatch({
        type: START
    })
    dispatch(scroll())
}

function scroll() {
    return {
        type: SCROLL
    }
}

export type Actions = Start | Scroll;
