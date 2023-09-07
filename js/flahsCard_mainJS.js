let preferencesObj_GLOBAL = {};
let loginStatus_GLOBAL = false;

let googleAppScriptUrl_GLOBAL = 'https://script.google.com/macros/s/AKfycbzoRaYfarjkNY6ILEwWdFsV3tMUFyXPRM8CGeU2iOAumfKPjX38I3gflQ2lefwHiZVNGg/exec';

let userID_GLOBAL =``;
let username_GLOBAL = '';
let password_GLOBAL = '';

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));


function callDoGet (queryString) {
    const url=`${googleAppScriptUrl_GLOBAL}${queryString}`;
    console.log(url);    
    return fetch (url)
    .then (res => res.json())
    .then (data => {
        // console.log(data);
        // console.log(JSON.stringify(data));
        return data;
    })
}

function fetch_GAS_Data_ByService (myService) {      
    console.log(myService);
    var queryString ="";
    if (myService === 'checkUser')
    {        
        queryString = `?myService=${myService}&name=${username_GLOBAL}&pass=${password_GLOBAL}`;
        console.log(queryString);
        return callDoGet(queryString);
    }
}

$(document).ready()
{
    // Retrieve the preferencesObj_ls_GLOBAL from storage
    // if (localStorage.getItem('preferencesObj_GLOBAL')
    // {
    //     preferencesObj_GLOBAL = localStorage.getItem('preferencesObj_GLOBAL');
    // } else 
    // {
    //     preferencesObj_GLOBAL = fetch_GAS_Data('fetchUserPreferences');
    // }


}