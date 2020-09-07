import { ADD, UPDATE, SELECTED } from '../actions/actionTypes';

const initialState = {
    chamado: [],
    selectedChamado: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                chamado: action.payload
            }
        case UPDATE:
            return {
                ...state,
                chamado: action.payload
            }
        case SELECTED: {
            return {
                ...state,
                selectedChamado: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer
