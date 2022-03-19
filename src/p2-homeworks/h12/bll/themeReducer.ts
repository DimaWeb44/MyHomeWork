const initState = {
    theme: ''
};
type  StateType = typeof initState
type ActionType = { type: "CHANGE_THEME", theme: string }

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): ActionType => ({type: "CHANGE_THEME", theme}); // fix any