

function  LoadDataFromServerForScreen2() {
    fetch_GAS_Data_ByService('fetchUserPreferences')
    .then(function(data) {       
       // console.log(data.aListInfObject);
        for (var i=0;i<data.aListInfObject.length;i++) {
            studyListArray_GLOBAL.push(data.aListInfObject[i]);       
        }
        //console.log(studyListArray_GLOBAL);
        localStorage.setItem("studyListArray_GLOBAL", JSON.stringify(studyListArray_GLOBAL));


        preferencesObj_GLOBAL = data.userPreferences;
        //console.log(preferencesObj_GLOBAL);
        localStorage.setItem("preferencesObj_GLOBAL", JSON.stringify(preferencesObj_GLOBAL));

        

        // fetch_GAS_Data_ByService('fetchUserPreferences')


        loadDataToOptionScreen();       
        //console.log('vao then');
    })
    .catch(function(v) {
        console.log(v);
    });

    //fetchWordListTo4Selects(listID);

}

function loadDataFromLocalStorage() {
    loadDataToOptionScreen();
    loadOptionControls();
}

function loadDataToOptionScreen()
{

    $('#optionScreen_welcomeName_SpanID').text(`Welcome ${username_GLOBAL}!`);

    const selectStudyList = document.querySelector(`#optionScreen_studyList_SelectID`);
    //console.log(selectStudyList);
    studyListArray_GLOBAL.forEach(function(item) {
        var option1 = document.createElement('option');
        option1.text = item[3];
        option1.value = item[0];
        selectStudyList.add(option1);          
    });

    loadListPreferences(ListID_GLOBAL);
    console.log(selectStudyList.value);


}

function fetchWordListFromServer(listID) {
    callDoGet(`?myService=getWordsFromList&listID=${ListID_GLOBAL}`)
    .then(function(data) {      
        wordListArray_GLOBAL = data;
        //console.log(data);
        //console.log('vao then');
        aSavedWordListArray_GLOBAL = {}; //reset data
        aSavedWordListArray_GLOBAL['array']=data;
        aSavedWordListArray_GLOBAL['id']=ListID_GLOBAL;
        //console.log(ListID_GLOBAL);
        console.log(aSavedWordListArray_GLOBAL);
        console.log(wordListArray_GLOBAL);
        load4Selected();
        loadOptionControls();
        localStorage.setItem("aSavedWordListArray_GLOBAL", JSON.stringify(aSavedWordListArray_GLOBAL));

    })
    .catch(function(v) {
        console.log(v);
    });
}

function load4Selected(){
      
    var listStart= document.getElementById('start-number-wordList');
    var listEnd= document.getElementById('end-number-wordList');
    var listMastered= document.getElementById('Mastered-wordList');
    var listReview= document.getElementById('Review-wordList');
    var stt=1;

    listStart.innerHTML="";
    listEnd.innerHTML="";
    listMastered.innerHTML="";
    listReview.innerHTML="";

    wordListArray_GLOBAL.forEach(function(item){
       var option1 = document.createElement('option');
       option1.text = item;
       option1.value = stt;
       listStart.add(option1);

       var option2 = document.createElement('option');
       option2.text = item;
       option2.value = stt;
       listEnd.add(option2);

       var option3 = document.createElement('option');
       option3.text = item;
       option3.value = stt;
       listMastered.add(option3);        

       var option4 = document.createElement('option');
       option4.text = item;
       option4.value = stt;
       listReview.add(option4);   

       stt++;
    });
    //document.getElementById("myP").style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;"
    
}

function loadListPreferences(listID) {

    //load wordlist from to Select
 
    if (localStorage.getItem("aSavedWordListArray_GLOBAL")!=null) 
    {
       // console.log(`chuan bi vao load local`);
        aSavedWordListArray_GLOBAL = JSON.parse(localStorage.getItem("aSavedWordListArray_GLOBAL"));
        //console.log(aSavedWordListArray_GLOBAL);
        if (aSavedWordListArray_GLOBAL.id===ListID_GLOBAL)
        {
            //console.log(`vao load local`);
            wordListArray_GLOBAL = aSavedWordListArray_GLOBAL.array;
            load4Selected();



            
        } else
        {
            console.log('trong loadListPreferences');
            fetchWordListFromServer(ListID_GLOBAL);
        }
    }

   // console.log(preferencesObj_GLOBAL[2][1]);
    //console.log(ListID_GLOBAL);
    //console.log(preferencesObj_GLOBAL);
   // console.log(ListID_GLOBAL);
    
    for (var i=0;i<preferencesObj_GLOBAL.length;i++)
    {
        if (preferencesObj_GLOBAL[i][1]==ListID_GLOBAL)
        {
           // console.log(preferencesObj_GLOBAL[i][4]);
            aPreObj_GLOBAL['StartWordID']=preferencesObj_GLOBAL[i][4];    
           // console.log(preferencesObj_GLOBAL[i][5]);    
            aPreObj_GLOBAL['EndWordID']=preferencesObj_GLOBAL[i][5];
            aPreObj_GLOBAL['MasteredWordList']=preferencesObj_GLOBAL[i][2];
            aPreObj_GLOBAL['ReviewWords']=preferencesObj_GLOBAL[i][3];
            aPreObj_GLOBAL['FlashCardList']=preferencesObj_GLOBAL[i][6];
            aPreObj_GLOBAL['FlashCardOption']=preferencesObj_GLOBAL[i][7];
            aPreObj_GLOBAL['WaitTime']=preferencesObj_GLOBAL[i][8];
            aPreObj_GLOBAL['PlayMode']=preferencesObj_GLOBAL[i][9];
        }
    }

    console.log(aPreObj_GLOBAL);
    loadOptionControls();

}

function loadOptionControls()
{
    console.log('vaoLoadOptionControls');
    console.log(aPreObj_GLOBAL['StartWordID']);
    
    $('#StartID').val(aPreObj_GLOBAL['StartWordID']).trigger('change'); 
    $('#EndID').val(aPreObj_GLOBAL['EndWordID']).trigger('change'); 
    
}

function savePresToLocalStorage() {

    for (var i=0;i<preferencesObj_GLOBAL.length;i++)  
        if (preferencesObj_GLOBAL[i][1]==ListID_GLOBAL)
        {
            preferencesObj_GLOBAL[i][4]=aPreObj_GLOBAL['StartWordID'];
            preferencesObj_GLOBAL[i][5]=aPreObj_GLOBAL['EndWordID'];
            preferencesObj_GLOBAL[i][2]=aPreObj_GLOBAL['MasteredWordList'];
            preferencesObj_GLOBAL[i][3]=aPreObj_GLOBAL['ReviewWords'];
            preferencesObj_GLOBAL[i][6]=aPreObj_GLOBAL['FlashCardList'];
            preferencesObj_GLOBAL[i][7]=aPreObj_GLOBAL['FlashCardOption'];
            preferencesObj_GLOBAL[i][8]=aPreObj_GLOBAL['WaitTime'];
            preferencesObj_GLOBAL[i][9]=aPreObj_GLOBAL['PlayMode'];
        }

    localStorage.setItem("ListID_GLOBAL", JSON.stringify(ListID_GLOBAL));    
    localStorage.setItem("preferencesObj_GLOBAL", JSON.stringify(preferencesObj_GLOBAL));


}

function dealWithOnChange() 
    {
        //////////////////////////////////////////////////////// START NUMBER
        $("#optionScreen_studyList_SelectID" ).on('change', function() {           
            ListID_GLOBAL = $(this).val();
            console.log(ListID_GLOBAL);
            loadListPreferences(ListID_GLOBAL);
           // console.log(aSavedWordListArray_GLOBAL);
           // fetchWordListFromServer(ListID_GLOBAL);
       
            //load4Selected();
            //savePresToLocalStorage();
       });

        $("#StartID" ).on('change', function() { 
            console.log(`vao StartID change`);
             $("#start-number-wordList" ).val(this.value).trigger('change');
            aPreObj_GLOBAL['StartWordID'] =  $("#start-number-wordList").val();
           
        });

        $("#start-number-wordList").on('change', function(){
            aPreObj_GLOBAL['StartWordID'] = $(this).val();
            document.getElementById("StartID").value=aPreObj_GLOBAL['StartWordID'];
            savePresToLocalStorage();
            //localStorage.setItem("StartWordID", StartWordID);
        });

    //     //////////////////////////////////////////////////////// END NUMBER
        $("#EndID" ).on('change', function() {    
           $("#end-number-wordList" ).val(this.value).trigger('change');
           aPreObj_GLOBAL['EndWordID'] = $("#end-number-wordList").val();
       });

        $("#end-number-wordList").on('change', function(){
            aPreObj_GLOBAL['EndWordID'] = $(this).val();
            document.getElementById("EndID").value=aPreObj_GLOBAL['EndWordID'];
            savePresToLocalStorage();
        });

    //     //////////////////////////////////////////////////////// MASTERED WORDS
    //     $("#Mastered-wordList").on('change', function(){     
    //         var aTempArray = $(this).val();
    //         localStorage.setItem("MasteredWordList", $(this).val());
    //         console.log(aTempArray);
    //         if (aTempArray!=null)
    //         {
    //             $("#sumWordMastered").text(aTempArray.length + ` mastered words (wont be shown)`);
    //             console.log(`Mastered-wordList changed`,aTempArray.length);
    //         } else $("#sumWordMastered").text(`0 mastered words (wont be shown)`);
    //     });

    //     //////////////////////////////////////////////////////// PLAY OPTION
    //     $("#Option-wordList").on('change', function(){
    //         FlashCardOption = $(this).val();         
    //         localStorage.setItem("FlashCardOption", FlashCardOption);
    //     });

    //     //////////////////////////////////////////////////////// WAITTIME
    //     $("#WaitTime").on('change', function(){
    //         WaitTime = $(this).val();          
    //         localStorage.setItem("WaitTime", WaitTime);  
    //     });
    }
