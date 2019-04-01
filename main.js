// writing functions that will control the input and output of the first quiz.
let  correct =0;
let questions =[]; // this array hold all the questions

for(let i=0;i<=6;i++){
    questions.push(document.getElementsByName(i.toString()))
}

// an array containing the answers to each question
let correctAnswers =["true","b","bu","len()","fruit2","t"];
