const initState = {
    themeId: 1,
}

export type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}
export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {themeId: action.id}
        default:
            return state
    }
}


export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
