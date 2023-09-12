let loginStatus_GLOBAL = `false`;

let googleAppScriptUrl_GLOBAL = 'https://script.google.com/macros/s/AKfycbxWRisQcZ0yypY_Nl4UpWKVmRSSh-P97P7pK1ZOt8zLXN8eDTiIpuEEOZRzCq1rE8eaXA/exec';

let username_GLOBAL = '';
let password_GLOBAL = '';

function callDoGet (queryString) {
    const url=`${googleAppScriptUrl_GLOBAL}${queryString}`;
    console.log(url);    
    $loading.show();
    return fetch (url)
    .then (res => res.json())
    .then (data => {
        // console.log(data);
        // console.log(JSON.stringify(data));
        $loading.hide();
        return data;
    })
}

// function fetch_GAS_Data_ByService (myService) {      
//     console.log(myService);
//     var queryString ="";
//     if (myService === 'checkUser')
//     {        
//         queryString = `?myService=${myService}&name=${username_GLOBAL}&pass=${password_GLOBAL}`;
//         console.log(queryString);
//         return callDoGet(queryString);
//     }

//     if (myService === 'fetchUserPreferences')
//     {        
//         queryString = `?myService=${myService}&userID=${userID_GLOBAL}`;
//         console.log(queryString);
//         return callDoGet(queryString);
//     }

//     if (myService === 'getWordsFromListFromTo')
//     {        
//         queryString = `?myService=${myService}&listID=${ListID_GLOBAL}`;
//         console.log(queryString);
//         return callDoGet(queryString);
//     }
// }

var $loading = $('#loadingDiv').hide();

$(document).ready()
{
    loginStatus_GLOBAL = localStorage.getItem("loginStatus_GLOBAL");
    if (loginStatus_GLOBAL===`true`)
    {
        LoadScreen2();
        $('#loginScreen_DivID').hide();
        $('#optionScreen_DivID').show();
    }
    //initialiseControl();
   // dealWithOnChange();
    // Retrieve the preferencesObj_ls_GLOBAL from storage
    // if (localStorage.getItem('preferencesObj_GLOBAL')
    // {
    //     preferencesObj_GLOBAL = localStorage.getItem('preferencesObj_GLOBAL');
    // } else 
    // {
    //     preferencesObj_GLOBAL = fetch_GAS_Data('fetchUserPreferences');
    // }

   // console.log(loginStatus_GLOBAL);

//     loginStatus_GLOBAL = localStorage.getItem("loginStatus_GLOBAL");

//    // console.log(loginStatus_GLOBAL);

//     if (loginStatus_GLOBAL===`true`)
//     {
//         //console.log('vao check');
//         $('#loginScreen_DivID').hide();
//         studyListArray_GLOBAL=JSON.parse(localStorage.getItem("studyListArray_GLOBAL"));
//         username_GLOBAL=localStorage.getItem("username_GLOBAL");
//         preferencesObj_GLOBAL=JSON.parse(localStorage.getItem("preferencesObj_GLOBAL"));
//         console.log(studyListArray_GLOBAL);
//         console.log(preferencesObj_GLOBAL);
//         //ListID_GLOBAL=JSON.parse(localStorage.getItem("ListID_GLOBAL"));
//        // console.log(username_GLOBAL);
//         loadDataFromLocalStorage();
//         loadListPreferences(ListID_GLOBAL);
//         $('#optionScreen_DivID').show();
//     } else
//     {
//         console.log('something wrong');
//     }

}


