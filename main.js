var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;

GLOBAL.document = new JSDOM('html').window.document;
console.log("Hey there, this is working");
window.addEventListener('load', computeScore, false);


// an array containing the answers to each question
let correctAnswers =["a","b","c","b","b","a"];

// the function below computes scores for quiz 1
function computeScore ()  {
    let quiz1= document.getElementsByClassName("Question1");
    let quiz2= document.getElementsByClassName("Question2");
    let quiz3= document.getElementsByClassName("Question3");
    let quiz4= document.getElementsByClassName("Question4");
    let quiz5= document.getElementsByClassName("Question5");
    let quiz6= document.getElementsByClassName("Question6");
    let nCorrect=0;   // number of correct answers
    let nItems=6;   // number of items

    //looping through the collection of each class

    for(let i=0;i<quiz1.length;i++){
       if(quiz1[i].checked){
           if(quiz1[i]==='a'){
               nCorrect++;
               break;
           }
       }
    }

    for(let i=0;i<quiz2.length;i++){
      if(quiz2[i].checked){
          if(quiz1[i]=== 'b'){
              nCorrect++;
              break;
          }
      }
    }

    for(let i=0;i<quiz3.length;i++){
        if(quiz3[i].checked){
            if(quiz1[i]==='c'){
                nCorrect++;
                break;
            }
        }
    }


    for(let i=0;i<quiz4.length;i++){
       if(quiz4[i].checked){
           if(quiz1[i]==='b'){
               nCorrect++;
               break;
           }
       }
    }


    for(let i=0;i<quiz5.length;i++){
        if(quiz5[i].checked){
            if(quiz1[i]==='b'){
                nCorrect++;
                break;
            }
        }
    }


    for(let i=0;i<quiz6.length;i++){

       if(quiz6[i].checked){
           if(quiz1[i]==='a'){
               nCorrect++;
               break;
           }
       }
    }

    //displaying the score on the
    let correctScore=document.getElementById('totalPercentage_score');
    correctScore.style.display='block';
    correctScore.style.color='black';
    correctScore.style.fontSize='25px';
    correctScore.innerHTML='Your total score is ' + nCorrect + '/'+nItems;

}





//handling the form input once the student has submitted their query

// function inputFormHandler($event){
//     let commentForm =document.getElementById('comment-form');
//     let messagereply=document.getElementById('reply-message');
//     $event.preventDefault();
//     commentForm.reset();
//
//     if(messagereply.childElementCount===0){
//         messagereply.innerHTML="Thank you for contacting us We will get back to you within three working days";
//         messagereply.style.padding="20px";
//         //messagereply.classList.add("hey where is everyone");
//
//     }
// }
//
// inputFormHandler();

