import {Dispatch} from 'redux';

export const START = 'Start';
export const STOP = 'Stop';
export const SCROLL = 'Scroll';

interface Start {
    type: typeof START
}

interface Stop {
    type: typeof STOP
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

export function stop(dispatch: Dispatch) {
    if (timer != null) {
        window.clearInterval(timer)
    }
    dispatch({
        type: STOP
    })
}

function scroll() {
    return {
        type: SCROLL
    }
}

export type Actions = Start | Stop | Scroll;
