export default function () {
    window.Echo.join('laravelchat_database_chatroom')
        .here((users) => {
            console.log('Usuarios online');
            console.log(users);
        })
        .joining((user) => {
            console.log('Usuario conectado');
            console.log(user);
        })
        .leaving((user) => {
            console.log('Usuario saiu');
            console.log(user);
        })
}


