// function pscoreup(p){
//   return (p++);
// }
let computerscore=0
let playerscore=0
 



let playersign=document.getElementById('playersign')
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    // console.log(randomNumber);
    switch (randomNumber) {
      case 0:
        return '✊'
      case 1:
        return '✋'
      case 2:
        return '✌'
    }
    // console.log(randomNumber);
}

    // console.log(getRandomChoice());
    
    const restartbtn = document.getElementById('restartbtn')
    const finalalert = document.getElementById('finalalert')
    const modalcontainer = document.getElementById('modalcontainer')  
    const resultdec = document.getElementById('resultdec')  
 const pscore = document.getElementById('pscore')  
 const cscore = document.getElementById('cscore')  
 function restartgame(){
  pscore.innerHTML=0
  cscore.innerHTML=0
}
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')
const rockBtn = document.getElementById('rock')
rockBtn.addEventListener('click', (e) => {
        playersign.innerHTML="✊";
        computersign.innerHTML=getRandomChoice()
        if(computersign.innerHTML=='✋'){
          console.log('You lose')
          computerscore++
          cscore.innerHTML=computerscore
          
      
                }
        else if(computersign.innerHTML=='✌'){
          console.log("You win")
          playerscore++
          pscore.innerHTML=playerscore

        }
        else if(computersign.innerHTML=='✊'){
          console.log("its a Tie")
        }
        // switch(computerscore==5||playerscore==5)
        // {
        //   case computerscore<=playerscore:
        //   modalcontainer.classList.add('show')
        //   // finalalert.textContent="You won the game";
          

        // }

         if(computerscore==5||playerscore==5){
          restartgame();
           resultdec.textContent="gameover";
           modalcontainer.classList.add('show');
           if(computerscore<=playerscore){
           finalalert.textContent="You won the game";}
           else
           finalalert.textContent="You Loose";

         }
        })
        
         paperBtn.addEventListener('click', (e) => {
                     playersign.innerHTML="✋";
                    //  console.log(   "player=" ,e.currentTarget.id)
                     computersign.innerHTML=getRandomChoice()
                     if(computersign.innerHTML=='✌'){
                      console.log('You lose')
                      computerscore++
                      cscore.innerHTML=computerscore
                            }
                    else if(computersign.innerHTML=='✊'){
                      console.log("You win")
                      playerscore++
                      pscore.innerHTML=playerscore
                    }
                    else if(computersign.innerHTML=='✋'){
                      console.log("its a Tie")
                    }
                    if(computerscore==5||playerscore==5){
                      restartgame();
                      resultdec.textContent="gameover";
                      modalcontainer.classList.add('show');
                      if(computerscore<=playerscore){
                      finalalert.textContent="You won the game";}
                      else
                      finalalert.textContent="You Loose";
           
                    }
                    //  console.log("computer=" ,getRandomChoice())
                    // if(computerscore==5||playerscore==5){
                    //   resultdec.textContent="gameover "}
                     
                     
                         })       
            scissorsBtn.addEventListener('click', (e) => {
                         playersign.innerHTML="✌";
                        //  console.log(   "player=" ,e.currentTarget.id)
                         computersign.innerHTML=getRandomChoice()
                         if(computersign.innerHTML=='✊'){
                          console.log('You lose')
                          computerscore++
                      cscore.innerHTML=computerscore
                                }
                        else if(computersign.innerHTML=='✋'){
                          console.log("You win")
                          playerscore++
          pscore.innerHTML=playerscore
                
                        }
                        else if(computersign.innerHTML=='✌'){
                          console.log("its a Tie")
                        }

                        if(computerscore==5||playerscore==5){
                          restartgame();
                          resultdec.textContent="gameover";
                          modalcontainer.classList.add('show');
                          if(computerscore<=playerscore){
                          finalalert.textContent="You won the game";}
                          else
                          finalalert.textContent="You Loose";
               
                        }
                        // if(computerscore==5||playerscore==5){
                        //   resultdec.textContent="gameover" }
                        //  console.log("computer=" ,getRandomChoice())
                        })   
                        
                        
                             restartbtn.addEventListener('click', (e) => {
                               modalcontainer.classList.remove('show');
                               playerscore=0;
                               computerscore=0;
                               resultdec.textContent="First to score 5 points wins the game";

                              //  restartgame();


                             })
                        

                       
    
    
        
     

