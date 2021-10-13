
let secretNumber=Math.floor((Math.random() * 20) + 1);
console.log(`My secretNumber ${secretNumber}`)
let score=20
let highScore=0



// on Click on check Button this logic will work//
document.querySelector('.check').addEventListener('click',function(){
    console.log(+(document.querySelector('.guess').value))
let guess=+(document.querySelector('.guess').value)
if(!guess){
    document.querySelector('.message').innerText="⛔ No Number Enter "
    }
    else if(secretNumber<guess){
if(score>1){
    document.querySelector('.message').innerText="🙈 Number is to high"
    document.querySelector('body').style.backgroundColor='black'
    score--;
    document.querySelector('.score').innerText=score;
}
else{
    document.querySelector('.message').innerText="⛔ You lost the Game "
    document.querySelector('body').style.backgroundColor='red'
}
        
    }
    else if(secretNumber>guess){
        if(score>1){
        document.querySelector('.message').innerText="🙈 Number is to low"
        document.querySelector('body').style.backgroundColor='black'
        score--;
        document.querySelector('.score').innerText=score;
        }
        else{
            document.querySelector('.message').innerText="⛔ You lost the Game "
            document.querySelector('body').style.backgroundColor='red'
        }
    }
    else if(secretNumber==guess){
        document.querySelector('.message').innerText="correct number 🎉🎉🎊"
        document.querySelector('body').style.backgroundColor='green'
        if(highScore<score){
            document.querySelector('.highscore').innerText=score
        document.querySelector('.number').innerText=secretNumber
        }
    }
})
// on Click on check Button this logic will work end //

document.querySelector('.again').addEventListener('click',function(){
    window.location.href = window.location.href;
})