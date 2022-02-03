import {InitialPeopleType} from "../HW8";

type ActionType = { type: 'sort'; payload: 'up' | 'down' } | { type: 'check'; payload: number }

export const homeWorkReducer = (state: InitialPeopleType[], action: ActionType): InitialPeopleType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? copyState : copyState.reverse()
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}