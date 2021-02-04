const UPDATE_ADD_POST_AREA = 'UPDATE_ADD_POST_AREA'
const ADD_POST = 'ADD_POST'

const ProfileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: // post_content - это параметр, название условное
            let newPost = {
                id: 5, // тут задуман счётчик
                user_name: 'Name_here Surname_here', // тут отслеживание id юзера
                post_content: action.post_content,
                likesAmount: 0 //тут задуман счётчик кликов
            }
            state.PostsArray.push(newPost)
            state.PostAreaData = ""
            return state
        case UPDATE_ADD_POST_AREA:
            state.PostAreaData = action.addPostAreaUpdatedText
            return state
        default:
            return state
    }
}

export const addPost_actionCreator = (text) => {
    return {
        type: ADD_POST,
        post_content: text
    }
}

export const updateAddPostArea_actionCreator = (text) => {
    return {
        type: UPDATE_ADD_POST_AREA,
        addPostAreaUpdatedText: text
    }
}

export default ProfileReducer