export const START = 'Start';

interface Start {
    type: typeof START
}

export function start(): Start {
    return {
        type: START
    }
}

export type Actions = Start;
