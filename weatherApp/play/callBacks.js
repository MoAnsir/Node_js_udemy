var getUser = (id, callBack) => {
    var user = {
        id: id,
        name: 'Lenny'
    };

    setTimeout(() => {
        callBack(user);
    }, 3000);
};

getUser(21, (userObj) => {
    console.log(userObj);
});