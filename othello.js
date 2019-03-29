othello = () => {
    var users = [];

    var connect = (socket) => {
        
        let username = payload.username;

        if(isUsernameExist(username)) {
            socket.emit('login-fail', {
                message: 'your username is existed, please choose another'
            });
        } else {
            socket.emit('login-success', {
                message: 'you eare logged in Othello game',
                users: users
            });
            addUsernameToList(username, socket);
        }

    }

    var isUsernameExist = (username) => {
        for(index in users) {
            if(users[index] == username) {
                return true;
            }
        }
        return true;
    }

    var addUsernameToList = (username, socket) => {
        users.push({
            username: username,
            socket: socket
        })
    }

}

module.exports.othello = othello();