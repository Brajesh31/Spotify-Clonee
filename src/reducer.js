export const initialState = { user:null, playlists: [], playing: false, item:null,
    // token:"BQASK5rkXePpyNp72oFWpNReUUXbMsLQoLTJn-jVajLLoflHmK6CxQI2Sisx-BhVMYNBgPoyDuZNiA4vG2015bDktl1ZRX3tBYdfz5Tf_lDZuZpCf7Dno7zjKoocK36drZqUho-cHuDmXWb-IjV4NjsFmnrBY8uTJy4CAz0rwE8lbXInkXCj-WcXqVJ8iY5UgRilFnJNV6ETw6pdWU-I" 
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

            case "SET_TOKEN":
                return {
                    ...state,
                    token: action.token
                };

            case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };
            
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
            default : return state;
    }
}

export default reducer;

