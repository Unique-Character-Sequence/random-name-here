let store = {
    _state: {
        ChatsComponentStates: {
            MessagesArray: [
                {id: 0, user_name: 'Georgo Biba', messageContent: 'asd2133'},
                {id: 1, user_name: 'Geo22rgo Biba', messageContent: '2sad133'},
                {id: 2, user_name: 'Geor11g333o Biba', messageContent: '213asas3'},
                {id: 3, user_name: 'Georg333o Biba', messageContent: '2133ddsa'},
                {id: 4, user_name: 'Georg1333o Biba', messageContent: '22asdqqq133'}
            ],
            MsgNameplatesArray: [
                {id: 0, user_name: 'Georgo Biba', lastMessage: 'asd2133'},
                {id: 1, user_name: 'Geo22rgo Biba', lastMessage: '2sad133'},
                {id: 2, user_name: 'Geor11g333o Biba', lastMessage: '213asas3'},
                {id: 3, user_name: 'Georg333o Biba', lastMessage: '2133ddsa'},
                {id: 4, user_name: 'Georg1333o Biba', lastMessage: '22asdqqq133'}
            ]
        },

        ContactsComponentStates: {
            AddedUsersArray: [
                {
                    id: 0,
                    user_name: 'Georgo Biba',
                    user_img: 'https://i.pinimg.com/originals/12/fe/52/12fe5285187f896e3ed6feaba04894be.jpg'
                },
                {
                    id: 1,
                    user_name: 'Geo22rgo Biba',
                    user_img: 'https://modnica.info/wp-content/uploads/2016/02/0902-52.jpg'
                },
                {
                    id: 2,
                    user_name: 'Geor11g333o Biba',
                    user_img: 'https://ptel.cz/wp-content/uploads/2019/12/123.png'
                },
                {
                    id: 3,
                    user_name: 'Georg333o Biba',
                    user_img: 'https://img.pravda.com/images/doc/0/3/03b8519-755671822123025.jpeg.jpg'
                },
                {
                    id: 4,
                    user_name: 'Georg1333o Biba',
                    user_img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/32/755879164960327.jpg'
                }
            ],
        },

        ProfileComponentStates: {
            PostsArray: [
                {id: 0, user_name: 'Georgo Biba', post_content: '123123', likesAmount: 1023},
                {id: 1, user_name: 'Geo22rgo Biba', post_content: '123123', likesAmount: 3911},
                {id: 2, user_name: 'Geor11g333o Biba', post_content: '123123123123', likesAmount: 4911},
                {id: 3, user_name: 'Georg333o Biba', post_content: '213123123', likesAmount: 5911},
                {id: 4, user_name: 'Georg1333o Biba', post_content: '123123', likesAmount: 123911}
            ],
            TextAreaData: ''
        }
    },
    getState() {
        return this._state
    },
    callSubscriber() {
        console.log('state changed')
    },
    areaUpdate(updatedText) {
        this._state.ProfileComponentStates.TextAreaData = updatedText
        this.callSubscriber(this._state)
    },
    addPost(post_content) { // post_content - это параметр, название условное
        let newPost = {
            id: 5, // тут задуман счётчик
            user_name: 'Name_here Surname_here', // тут отслеживание id юзера
            post_content: post_content,
            likesAmount: 0 //тут задуман счётчик кликов
        }
        this._state.ProfileComponentStates.PostsArray.push(newPost)
        this._state.ProfileComponentStates.TextAreaData = ""
        this.callSubscriber(this._state)
    },
    subscribe(observer) {
        this.callSubscriber = observer // замена кода внутри функции
    }

}

export default store
//window.store = store