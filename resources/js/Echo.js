import Vue from 'vue'
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
            let conversation = e.message;

            if (store.state.chat.userConversation == null ||
                store.state.chat.userConversation.id != conversation.sender.id) {

                Vue.$vToastify.success(`
                    Mensagem: ${conversation.message}
                    `, `${conversation.sender.name} enviou uma mensagem`)

            } else {
                conversation.me = false;
                store.commit('ADD_MESSAGE', conversation)
            }
        })
}


