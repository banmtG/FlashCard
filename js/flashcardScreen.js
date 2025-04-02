var linkBtn = document.getElementsByClassName('btnLink');
const myAudioUK = document.getElementById('myAudioUK');
const myAudioUS = document.getElementById('myAudioUS');

function showWord(theFakeI) 
{        
     var i=theFakeI-1;
    if (myTimer10!=null) window.clearTimeout(myTimer10);
   document.getElementById('ACard').innerHTML = "Empty";  
    if ((i>=0) && (i< WordListArray.length))
    {                

    var IPA_UK = (WordListArray[i][5]!="")?`/${WordListArray[i][5]}/`:"";
    //console.log(IPA_UK);
    var IPA_US = (WordListArray[i][6]!="")?`/${WordListArray[i][6]}/`:"";
    //console.log(IPA_UK);

    var totalCard = FlashCardList.length;
    var position = wordCountingI+1;
    var aString = position + ` / ` + totalCard ;
   
    // document.getElementsByClassName('verticalWord')[0].innerHTML=`<div class="verticalPart"><span>` + WordListArray[i][0] + `</span> <span style="font-weight: 300; font-size:2.5rem; margin: 20px 0;">` + IPA_UK + `</span> </div><div class="paging"><span style="font-size: 0.9rem" id="CardIDNumber"></span><span style="font-size: 0.6rem" id="Paging"></span></div>`;

    // $('.verticalWord').html(`<div class="verticalPart"><span>` + WordListArray[i][0] + `</span><span style="font-weight: 300; font-size:2.5rem; margin: 20px 0;">` + IPA_UK + `</span></div><div class="paging"><span style="font-size: 0.9rem" id="CardIDNumber"></span><span style="font-size: 0.6rem" id="Paging"></span></div>`);

    document.getElementsByClassName('verticalWord')[0].innerHTML=`<div class="verticalPart"><span>` + WordListArray[i][0] + `</span><span style="font-weight: 300; font-size:2.5rem; margin: 20px 0;">` + IPA_UK + `</span></div>`;

    $('.verticalWord').append(`<div class="paging1"><div style="font-size: 1.2rem" id="CardIDNumber"></div><div style="font-size: 1.2rem" id="Paging"></div></div>`);

    $('#CardIDNumber').text(theFakeI);

    if (FavouriteWordList.indexOf(parseInt($('#CardIDNumber').text()))>-1) {
        $('#AddToFavouriteList').css('color','greenyellow');
    } else 
    $('#AddToFavouriteList').css('color','white');


    if (MasteredWordList.indexOf(parseInt($('#CardIDNumber').text()))>-1) {
        $('#AddToMasteredList').css('color','red');
    } else 
    $('#AddToMasteredList').css('color','white'); 

    $('#Paging').text(aString);

    var linkOptions = document.getElementById('selectLinks').options;
    
    //console.log(linkOptions);

    for (var ii=0;ii<linkOptions.length;ii++)
    {
        linkOptions[ii].title = linkOptions[ii].value.replace("theWord", WordListArray[i][0]);
    }


    // Array.from(linkOptions).forEach(function (element) {
    //     element.title = element.value.replace("theWord", WordListArray[i][0]);
    // });

       
    //console.log(linkOptions);

    // console.log(linkBtn[1].getAttribute('data-value'));
    // linkBtn[1].setAttribute(`data-title`,linkBtn[1].getAttribute('data-value').replace("theWord", WordListArray[i][0])); 
    // console.log(linkBtn[1].getAttribute('data-title'));


    for (var ii=0;ii<linkBtn.length;ii++)
    {
    
        linkBtn[ii].setAttribute(`data-title`,linkBtn[ii].getAttribute('data-value').replace("theWord", WordListArray[i][0]));
    }


    // Array.from(linkBtn).forEach(function (element) {
    //     element.setAttribute(`data-title`,element.getAttribute('data-value').replace("theWord", WordListArray[i][0]));
    //     // element.title = element.data-value.replace("theWord", WordListArray[i][0]);
    // });


    // linkOptions.forEach((item) => {
    //     item.value = item.value.replace("theWord", WordListArray[i].wordString);
    // });

    document.getElementById('ACard').innerHTML = "";  
    $("#ACard").append(`<div><div class="theWord">` + WordListArray[i][0] + 
        `</div><span class="pronounce">` + IPA_UK + `</span> <i style="font-size:2rem" class="pronounceIcon fa fa-volume-up" aria-hidden="true"></i> UK <i style="font-size:2rem"  class="pronounceIcon fa fa-volume-up" aria-hidden="true"></i> US </div>`);
    $("#ACard").append(`<div style="width: 100%;" id="cardBody"></div>`);
    $("#cardBody").append(`<div class="definition"><p style="margin-top:0.3rem">` +  WordListArray[i][1] + `</p><p class="DefinitionVN">` + WordListArray[i][2] + `</p></div>`);

    $("#cardBody").append(`<div class="examples"><ul>`+ WordListArray[i][3] + `</ul></div>`);

    if (WordListArray[i][4]!=null)
    $("#cardBody").append(`<img class="illustration"src="`+ WordListArray[i][4] + `">`);

    
   
    if (WordListArray[i][7]=="") {
        myAudioUK.src="https://dict.youdao.com/dictvoice?audio=" + WordListArray[i][0]  + " &type=1";
    } else {
        myAudioUK.src=`https://dictionary.cambridge.org/media/english/uk_pron` + WordListArray[i][7];
    }

    if (AutoSound.checked==true) {

    var playPromise = myAudioUK.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            myAudioUK.play();
        }).catch(function(error) {
            // myAudioUK.src="https://dict.youdao.com/dictvoice?audio=" + WordListArray[i][0]  + " &type=1";
            // myAudioUK.play();
            fromText2Speed(WordListArray[i][0]);
        });
    }
    
    }   


    if (WordListArray[i][8]=="") {
        myAudioUS.src="https://dict.youdao.com/dictvoice?audio=" + WordListArray[i][0]  + " &type=2";
    } else {
        myAudioUS.src=`https://dictionary.cambridge.org/media/english/us_pron` + WordListArray[i][8];
    }

  

    var myElement = document.getElementById('cardBody');

      // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on("swiperight", function(ev) {
        $('#PreviousCard').trigger( "click" );
        //myElement.textContent = ev.type +" gesture detected.";
    });

    mc.on("swipeleft", function(ev) {
        $('#NextCard').trigger( "click" );
        //myElement.textContent = ev.type +" gesture detected.";
    });

 
    
    mc.on("tap", function(ev) {
        $('#PausePlay').trigger( "click" );
        //myElement.textContent = ev.type +" gesture detected.";
    });
 

    // mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    // mc.get('pinch').set({ enable: true });
    // mc.get('rotate').set({ enable: true });
    // mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    



    if (HideDefinitionID.checked==false) {
            $('.definition').hide(); 
            $('.examples').hide(); 
            
            console.log('vao hide');
    }
    else {
            $('.definition').show(); 
            $('.examples').show(); 
            console.log('vao show');
    }    

    
   
    $('.paging1').click(function(){
        if (HideDefinitionID.checked==false) {
            HideDefinitionID.checked=true;
            $('.definition').show(); 
            $('.examples').show(); 
        } else {
            HideDefinitionID.checked=false;
            $('.definition').hide(); 
            $('.examples').hide();
        }
    })
    


    var allVolumeBtn = document.getElementById("ACard").getElementsByClassName("pronounceIcon");
  
    allVolumeBtn[0].addEventListener('click', function(event) {

        playSoundUntilCarouselPlay();

        if ($('#PauseBtn').is(':visible'))
        {
            window.clearTimeout(myTimer);
            console.log(`myTimer.cleared`,myTimer);
            $(".PlayButton").toggle();
        }     
        });

    allVolumeBtn[1].addEventListener('click', function(event) {
        
        myAudioUS.play();

        if ($('#PauseBtn').is(':visible'))
        {
            window.clearTimeout(myTimer);
            console.log(`myTimer.cleared`,myTimer);
            $(".PlayButton").toggle();
        }     
        });      

   }
}     

function playSoundUntilCarouselPlay() 
{
    timer10();
}

function fromText2Speed(phrase)
{
    let speech = new SpeechSynthesisUtterance(phrase);            
        // Speak the text
    window.speechSynthesis.speak(speech);
}


timer10 = function() {
    // const myAudioUK = document.getElementById('myAudioUK');
    myAudioUK.play();
    myTimer10 =  setTimeout(timer10, 5000);
}


timer = function() {

    savePresToLocalStorage();
    console.log(localUserPres);

    if (wordCountingI<FlashCardList.length) {                
        showWord(FlashCardList[wordCountingI]);
        wordCountingI++; 
    }

    if (wordCountingI==FlashCardList.length) {
        wordCountingI=0;
    
    }
    myOldTimer = myTimer;
    myTimer =  setTimeout(timer, WaitTime);

}

function PlaytoPause () {
    console.log("vao");
    console.log($('#PlayBtn').is(':visible'));
    if ($('#PlayBtn').is(':visible'))
    {
        $('#PlayBtn').hide();
        $('#PauseBtn').show();
    }
}


$('#BacktoMenu').on('click', function() {
    $('#flashcardScreen_DivID').hide();
    $('#optionScreen_DivID').show();
    window.clearTimeout(myTimer);
    window.clearTimeout(myTimer10);
    console.log(`myTimer.cleared`,myTimer);
});

$('#PreviousCard').on('click', function() {
    if ($('#PauseBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        console.log(`myTimer.cleared`,myTimer);
        $(".PlayButton").toggle();
    }           
  
   // console.log(`myTimer`, myTimer);
   var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));
    console.log(`wordCountingI`, wordCountingI);
    //wordCountingI =  $('#CardIDNumber').text();
    console.log(`realPosition`, realPosition);
    if (wordCountingI>realPosition) wordCountingI=realPosition;


   console.log(`wordCountingI`, wordCountingI);
    //wordCountingI =  $('#CardIDNumber').text();
   // console.log(`realPosition`, realPosition);

    console.log(`wordCountingI s1`, wordCountingI);
    console.log(`wordCountingI s2`, wordCountingI);
    wordCountingI--;
    console.log(`wordCountingI s3`, wordCountingI);

    if (wordCountingI<0) {
        wordCountingI=FlashCardList.length-1;
       //$('#CardIDNumber').text(wordCountingI);
    }
    // if (wordCountingI-1>realPosition) wordCountingI--;
    // if (wordCountingI=realPosition) wordCountingI++;

    showWord(FlashCardList[wordCountingI]);

   

 //   console.log(`wordCountingI`, wordCountingI);

   
    
});

$('#NextCard').on('click', function() {

    if ($('#PauseBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        console.log(`myTimer.cleared`,myTimer);
        $(".PlayButton").toggle();
    }           
    //console.log(`myTimer`, myTimer);
    //console.log(`$('#CardIDNumber').text()`, $('#CardIDNumber').text());
    var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));
    console.log(`FlashCardList`, FlashCardList);
    console.log(`$('#CardIDNumber').text()`, $('#CardIDNumber').text());
    console.log(`wordCountingI`, wordCountingI);
    console.log(`realPosition`, realPosition);
    //wordCountingI =  $('#CardIDNumber').text();               
  


   // console.log(`wordCountingI`, wordCountingI);
    //wordCountingI =  $('#CardIDNumber').text();


    

    if (realPosition==FlashCardList.length-1) {
        wordCountingI=-1;
       //$('#CardIDNumber').text(wordCountingI);
    }

    wordCountingI++;

    console.log(`wordCountingI s1`, wordCountingI);

    if (wordCountingI-1>realPosition) wordCountingI--;
    console.log(`wordCountingI s2`, wordCountingI);

    if (wordCountingI==realPosition) wordCountingI++;
    console.log(`wordCountingI s3`, wordCountingI);

    showWord(FlashCardList[wordCountingI]);
   

   
    console.log(`wordCountingI`, wordCountingI);

});

$('#PausePlay').on('click', function() {
   
    //console.log(`myTimer.cleared`,myTimer);
    if ($('#PlayBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        timer();
        console.log(`myTimer.cleared`,myTimer);
    }

    if ($('#PauseBtn').is(':visible'))
    {
        window.clearTimeout(myTimer);
        console.log(`myTimer.cleared`,myTimer);
    }

    $(".PlayButton").toggle();

});


$('#AddToMasteredList').on('click', function() {
   
    // if ($('#PauseBtn').is(':visible'))
    // {
    //     window.clearTimeout(myTimer);
    //     $(".PlayButton").toggle();
    // }           

    //wordCountingI=wordCountingI-1;
    // console.log(`MasteredWordList`, MasteredWordList);
    var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));
    // console.log(`realPosition`, realPosition);
    // console.log(`FlashCardList[realPosition]`, FlashCardList[realPosition]);
  
    const index = MasteredWordList.indexOf(parseInt($('#CardIDNumber').text()));

    if (index > -1) { 
      MasteredWordList.splice(index, 1); 
      $('#AddToMasteredList').css('color','white');
    } else
    { 
        $('#AddToMasteredList').css('color','red');
        MasteredWordList.push(FlashCardList[realPosition]);
    }
    // console.log(`MasteredWordList`, MasteredWordList);

    $("#Mastered-wordList").val(MasteredWordList).trigger("change.select2");

    // FlashCardList.splice(FlashCardList.indexOf(FlashCardList[realPosition]), 1);
    savePresToLocalStorage();    
    //showWord(FlashCardList[realPosition]);
    // console.log(`myTimer.cleared`,myTimer);
});

$('#AddToFavouriteList').on('click', function() {
   
    // if ($('#PauseBtn').is(':visible'))
    // {
    //     window.clearTimeout(myTimer);
    //     $(".PlayButton").toggle();
    // }           
    //wordCountingI=wordCountingI-1;
    // console.log(`FavouriteWordList`, FavouriteWordList);
    var realPosition = FlashCardList.indexOf(parseInt($('#CardIDNumber').text()));

    const index = FavouriteWordList.indexOf(parseInt($('#CardIDNumber').text()));

    if (index > -1) { 
        FavouriteWordList.splice(index, 1); 
      $('#AddToFavouriteList').css('color','white');
    } else
    { 
        $('#AddToFavouriteList').css('color','greenyellow');
        FavouriteWordList.push(FlashCardList[realPosition]);
    }
    // console.log(`FavouriteWordList`, FavouriteWordList);
    $("#Review-wordList").val(FavouriteWordList).trigger("change.select2");
   
    savePresToLocalStorage();        
    // console.log(`myTimer.cleared`,myTimer);
});



// $('.btnLink').click(function(event){
//     console.log(event);

// });

for (var ii=0;ii<linkBtn.length;ii++)
{
    linkBtn[ii].addEventListener('click', (e)=> {
        var data = e.currentTarget.getAttribute('data-title');       
        console.log(e.currentTarget);        
        window.open(data,`${ e.currentTarget.getAttribute('data-tab')}`);
    })      
}


// Array.from(linkBtn).forEach(function (element) {
//     element.addEventListener('click', (e)=> {
//         var data = element.getAttribute('data-title');        
//         window.open(data,`${element.getAttribute('data-tab')}`);
//     })   
// });

$(document).keydown( function(eventObject) {
    console.log(eventObject.which);
    if(eventObject.which==39) {//right arrow 
        $('#NextCard').trigger( "click" );//emulates click on prev button 
    } else if(eventObject.which==37) {//left arrow
        $('#PreviousCard').trigger( "click" );//emulates click on next button
    } else if(eventObject.which==32) {
        $('#PausePlay').trigger( "click" );
    }
} );



