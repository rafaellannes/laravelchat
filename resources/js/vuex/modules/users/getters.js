export default {
    sortedUsers(state) {
        let users = state.users.data;
        const onlineUsers = state.onlineUsers;

        // Sort users by online status
        users = users.sort(user => {
            const index = onlineUsers.findIndex(u => u.email === user.email);
            return index === -1 ? 1 : -1;
        });


        // Add online status to users
        users = users.map(user => {
            const index = onlineUsers.findIndex(u => u.email === user.email);

            user.online = index != -1;
            return user;
        })

        return users;
    }
}
