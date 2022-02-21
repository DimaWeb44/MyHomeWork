const initState = {
    loading: false
}

type  StateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, loading: action.value}
        }
        default: return state
    }
}
type LoadingActionType = {
    type:`CHANGE_LOADING`,
    value: boolean
}
export const loadingAC = (value: boolean): LoadingActionType => ({type:`CHANGE_LOADING`,  value}) // fix any