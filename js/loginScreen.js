$('#loginScreen_login_BtnID').on('click', function () {
    // ES2015+ approach: Promises with then()

    username_GLOBAL = document.querySelector('#loginScreen_username_TextID').value;
    password_GLOBAL = document.querySelector('#loginScreen_password_TextID').value;   

    console.log(username_GLOBAL);
    console.log(password_GLOBAL);

    fetch_GAS_Data_ByService('checkUser')
    .then(function(dataUser) {       
        console.log(dataUser.UserID);
        userID_GLOBAL = dataUser.UserID;
        if (userID_GLOBAL!=null) {
            $('#loginScreen_DivID').hide();
            LoadDataforScreen2();
            $('#optionScreen_DivID').show();
        }

        console.log('vao then');
    })
    .catch(function(v) {
        console.log(v);
    });

    //  ES7 approach 
    // async function tj_customer_name(id) {
    //     const response = await fetch('some-url', {});
    //     const json = await response.json();
    
    //     return json.first_name.concat(' ').concat(json.last_name);
    // }

})

