import {Dispatch} from 'redux';

export const START = 'Start';
export const STOP = 'Stop';
export const SCROLL = 'Scroll';
export const SELECT_SCORE = 'SelectScore';
export const CHANGE_SPEED = 'ChangeSpeed';

interface Start {
    type: typeof START
    speed: number
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

interface ChangeSpeed {
    type: typeof CHANGE_SPEED
    query: string
}

let timer: number | null = null;

export function start(dispatch: Dispatch, speedQuery: string) {
    if (timer != null) {
        window.clearInterval(timer)
    }
    const speed = parseInt(speedQuery);
    timer = window.setInterval(() => dispatch(scroll()), speed)
    dispatch({
        type: START,
        speed: speed
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

export function changeSpeed(dispatch: Dispatch, query: string) {
    dispatch({
        type: CHANGE_SPEED,
        query: query
    })
}

function scroll() {
    return {
        type: SCROLL
    }
}

export type Actions = Start | Stop | Scroll | SelectScore | ChangeSpeed;
