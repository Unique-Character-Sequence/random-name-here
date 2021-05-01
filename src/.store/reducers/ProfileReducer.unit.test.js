import ProfileReducer, {deletePost} from "./ProfileReducer";

let test_state = {
    PostsArray: [
        {id: 0, user_name: 'Georgo Biba', post_content: '123123', likesAmount: 1023},
        {id: 1, user_name: 'Geo22rgo Biba', post_content: '123123', likesAmount: 3911},
        {id: 2, user_name: 'Geor11g333o Biba', post_content: '123123123123', likesAmount: 4911},
        {id: 3, user_name: 'Georg333o Biba', post_content: '213123123', likesAmount: 5911},
        {id: 4, user_name: 'Georg1333o Biba', post_content: '123123', likesAmount: 123911}
    ]
}

it('deletePost length decrease test', () => {
        let test_action = deletePost(3)
        let newReturnedState = ProfileReducer(test_state, test_action)
        expect(newReturnedState.PostsArray.length).toBe(4)
    }
)