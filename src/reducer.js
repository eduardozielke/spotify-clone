export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: 'BQBxgCv0D-PkpDtk0Ys2UknEu2LP7_ewugSkY0AtbUpEddvSXWfZ3SMmk0w_o4s_4hmHHwiakBP7XBK-TKhEP7_9Pm69SREMX-w4rP2xyPzxlHYOMp-OfienJYI9vh_A-G7f2QAHVMsOibe8fsXdXliUeus'
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state
    }
}

export default reducer