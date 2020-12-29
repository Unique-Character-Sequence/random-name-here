import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let MessagesMassive = [
    {id: 0, user_name: 'Georgo Biba', messageContent: 'asd2133'},
    {id: 1, user_name: 'Geo22rgo Biba', messageContent: '2sad133'},
    {id: 2, user_name: 'Geor11g333o Biba', messageContent: '213asas3'},
    {id: 3, user_name: 'Georg333o Biba', messageContent: '2133ddsa'},
    {id: 4, user_name: 'Georg1333o Biba', messageContent: '22asdqqq133'}
]


let PostsMassive = [
    {id: 0, user_name: 'Georgo Biba', post_content: 'asd2133', likesAmount: 1023},
    {id: 1, user_name: 'Geo22rgo Biba', post_content: '2sad133', likesAmount: 3911},
    {id: 2, user_name: 'Geor11g333o Biba', post_content: '213asas3', likesAmount: 4911},
    {id: 3, user_name: 'Georg333o Biba', post_content: '2133ddsa', likesAmount: 5911},
    {id: 4, user_name: 'Georg1333o Biba', post_content: '22asdqqq133', likesAmount: 123911}
]


let MsgNameplatesMassive = [
    {id: 0, user_name: 'Georgo Biba', lastMessage: 'asd2133'},
    {id: 1, user_name: 'Geo22rgo Biba', lastMessage: '2sad133'},
    {id: 2, user_name: 'Geor11g333o Biba', lastMessage: '213asas3'},
    {id: 3, user_name: 'Georg333o Biba', lastMessage: '2133ddsa'},
    {id: 4, user_name: 'Georg1333o Biba', lastMessage: '22asdqqq133'}
]


ReactDOM.render(
    <React.StrictMode>
        <App PostsMassive={PostsMassive} MessagesMassive={MessagesMassive} MsgNameplatesMassive={MsgNameplatesMassive}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();