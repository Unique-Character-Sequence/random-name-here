const UPDATE_ADD_POST_AREA = 'UPDATE_ADD_POST_AREA'
const ADD_POST = 'ADD_POST'

let InitialState = {
    PostsArray: [
        {id: 0, user_name: 'Georgo Biba', post_content: '123123', likesAmount: 1023},
        {id: 1, user_name: 'Geo22rgo Biba', post_content: '123123', likesAmount: 3911},
        {id: 2, user_name: 'Geor11g333o Biba', post_content: '123123123123', likesAmount: 4911},
        {id: 3, user_name: 'Georg333o Biba', post_content: '213123123', likesAmount: 5911},
        {id: 4, user_name: 'Georg1333o Biba', post_content: '123123', likesAmount: 123911}
    ],
    PostAreaData: ''
}

const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                PostsArray: [...state.PostsArray, {
                    id: 5,
                    user_name: 'Name_here Surname_here',
                    post_content: state.PostAreaData,
                    likesAmount: 0
                }],
                PostAreaData: ''
            }
        case UPDATE_ADD_POST_AREA:
            return {
                ...state,
                PostAreaData: action.addPostAreaUpdatedText
            }
        default:
            return state
    }
}

export const addPost_actionCreator = (text) => {
    return {
        type: ADD_POST
    }
}

export const updateAddPostArea_actionCreator = (text) => {
    return {
        type: UPDATE_ADD_POST_AREA,
        addPostAreaUpdatedText: text
    }
}

export default ProfileReducer