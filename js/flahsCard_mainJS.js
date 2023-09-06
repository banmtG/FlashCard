let preferencesObj_GLOBAL = {};
let loginStatus_GLOBAL = false;
let googleAppScriptUrl_GLOBAL = 'SomeUrl/exec';

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));


function callDoGet (queryString) {
    const url=`${googleAppScriptUrl_GLOBAL}${queryString}`;
    fetch (url)
    .then (res => res.text())
    .then (rep => {
       return rep;
    })
}

function fetch_GAS_Data_ByService (myService) {      
    var queryString ="";
    if (myService==='fetchUserPreferences')
    {
        queryString = `?myService=${mySerivce}&user=${userID_GLOBAL}&pass=${listID_GLOBAL}`;
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