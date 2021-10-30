import {Dispatch} from 'redux';

export const START = 'Start';
export const STOP = 'Stop';
export const SCROLL = 'Scroll';
export const SELECT_SCORE = 'SelectScore';

interface Start {
    type: typeof START
}

interface Stop {
    type: typeof STOP
}

interface Scroll {
    type: typeof SCROLL
}

interface SelectScore {
    type: typeof SELECT_SCORE
    id: number
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

export function selectScore(dispatch: Dispatch, id: number) {
    dispatch({
        type: SELECT_SCORE,
        id: id
    })
}

function scroll() {
    return {
        type: SCROLL
    }
}

export type Actions = Start | Stop | Scroll | SelectScore;
