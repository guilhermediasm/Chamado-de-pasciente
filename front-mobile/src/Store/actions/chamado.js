import { ADD, UPDATE, SELECTED } from './actionTypes'

export const setchamado = chamado => {

    return dispatch => {
        dispatch({
            type: ADD,
            payload: chamado
        })
    }
}

export const updateChamado = chamado => {

    return dispatch => {
        dispatch({
            type: UPDATE,
            payload: chamado
        })
    }
}

export const selectedChamado = chamado => {

    return dispatch => {
        dispatch({
            type: SELECTED,
            payload: chamado
        })
    }

}