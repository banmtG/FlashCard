$('#loginScreen_login_BtnID').click(function(){
    // ES2015+ approach: Promises with then()
    username_GLOBAL = document.querySelector('#loginScreen_username_TextID').value;
    password_GLOBAL = document.querySelector('#loginScreen_password_TextID').value;   

    console.log(username_GLOBAL);
    console.log(password_GLOBAL);

    
    callDoGet(`?myService=checkUser&name=${username_GLOBAL}&pass=${password_GLOBAL}`)
    .then(function(data) {      
        
        if (data.UserID!=null) {
            console.log('welcome 1');         

            userName = data.UserName;
            console.log(userName);        
            console.log(data);          
              
            localListArray = data.listArray.slice();
            localUserPres = data.userPres.slice();
            localStorage.setItem("userName", userName);
            localStorage.setItem("localListArray", JSON.stringify(localListArray));
            localStorage.setItem("localUserPres", JSON.stringify(localUserPres));
            localStorage.setItem("loginStatus_GLOBAL", `true`);
            localListArray=JSON.parse(localStorage.getItem("localListArray"));
            localUserPres=JSON.parse(localStorage.getItem("localUserPres"));
            console.log(`localListArray`, localListArray);
            console.log(`localUserPres`, localUserPres);
            LoadScreen2();
            $('#loginScreen_DivID').hide();
            $('#optionScreen_DivID').show();
            
        }
        
        if (data.UserID==null) {
            console.log('wrong password');
        }
        // userID_GLOBAL = dataUser.UserID;
        // if (userID_GLOBAL!=null) {
        //    
        //     LoadDataFromServerForScreen2();
        //     loginStatus_GLOBAL = true;            
        //     localStorage.setItem("loginStatus_GLOBAL", `true`);
        //     localStorage.setItem("username_GLOBAL", username_GLOBAL);
        //     username_GLOBAL==localStorage.getItem("username_GLOBAL");
        //     console.log(username_GLOBAL);
        //     $('#optionScreen_DivID').show();
        // }

        // console.log('vao then');
        
        // wordListArray_GLOBAL = data;
        // //console.log(data);
        // //console.log('vao then');
        // aSavedWordListArray_GLOBAL = {}; //reset data
        // aSavedWordListArray_GLOBAL['array']=data;
        // aSavedWordListArray_GLOBAL['id']=ListID_GLOBAL;
        // //console.log(ListID_GLOBAL);
        // console.log(aSavedWordListArray_GLOBAL);
        // console.log(wordListArray_GLOBAL);
        // load4Selected();
        // loadOptionControls();
        // localStorage.setItem("aSavedWordListArray_GLOBAL", JSON.stringify(aSavedWordListArray_GLOBAL));

    })
    .catch(function(v) {
        console.log(v);
    });
    
    
    
    
    
    // fetch_GAS_Data_ByService('checkUser')
    // .then(function(dataUser) {       
    //     console.log(dataUser.UserID);
    //     userID_GLOBAL = dataUser.UserID;
    //     if (userID_GLOBAL!=null) {
    //         $('#loginScreen_DivID').hide();
    //         LoadDataFromServerForScreen2();
    //         loginStatus_GLOBAL = true;            
    //         localStorage.setItem("loginStatus_GLOBAL", `true`);
    //         localStorage.setItem("username_GLOBAL", username_GLOBAL);
    //         username_GLOBAL==localStorage.getItem("username_GLOBAL");
    //         console.log(username_GLOBAL);
    //         $('#optionScreen_DivID').show();
    //     }

    //     console.log('vao then');
    // })
    // .catch(function(v) {
    //     console.log(v);
    // });

    //  ES7 approach 
    // async function tj_customer_name(id) {
    //     const response = await fetch('some-url', {});
    //     const json = await response.json();
    
    //     return json.first_name.concat(' ').concat(json.last_name);
    // }

})

