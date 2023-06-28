import store from './vuex/store'

export default function () {
    window.Echo.join('laravelchat_database_chatroom')
        .here((users) => {
            console.log('Usuarios online');
            console.log(users);

            store.commit('ADD_ONLINE_USERS', users);
        })
        .joining((user) => {
            console.log('Usuario conectado');
            console.log(user);

            store.commit('ADD_ONLINE_USER', user);
        })
        .leaving((user) => {
            console.log('Usuario saiu');
            console.log(user);

            store.commit('REMOVE_ONLINE_USER', user);
        })

    const userId = window.Laravel.user

    window.Echo.channel(`laravelchat_database_private-chat.${userId}`)
        .listen('NewMessageCreated', (e) => {
            console.log('Nova mensagem');
            console.log(e.message);

           /*  store.commit('ADD_NEW_MESSAGE', e.message); */
        })
}


