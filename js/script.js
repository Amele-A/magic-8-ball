
const div = document.createElement('div')
const btn = document.querySelector('button');
const input = document.querySelector('input');
const p = document. querySelector("#para");
const h5 = document.querySelector('h5');
const divCircle= document.querySelector('#circle').style.animation='spin1 1s linear infinite';
const div1 =document.querySelector('#div1');



// create a random number function

    function getRandomNumber(max_number){
        return Math.floor(Math.random()* max_number);

    }
    

    //add event listner to the button

    btn.addEventListener('click',function(){

        let randomNumber = getRandomNumber(5);
        // console.log(randomNumber);
        let answer=''
        let magicColor=[];

        switch(randomNumber){
            case 0:
                answer='Do not count on it'
            break;

            case 1:
                answer='It is decidedly so'
                break;
            case 2:
                answer='Cannot predict now'
            break;
            case 3:
                answer='Outlook not so good'
            break;

            case 4:
                answer='Ask Vinson'
                break;
            case 5:
                answer='Signs point to yes'
            break;
            

        }

        p.innerHTML=answer;
        input.remove();
        h5.innerText=input.value;


      setTimeout(function(){
          location.reload();

      },4000);
        
     

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const color=["A", "B", "C", "D", "E", "F",0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let hexColor = '#';
    let colorPicker = '#'

    for (let i = 0; i < 6; i++){
        hexColor += hex[randomNumb()];
        colorPicker += color[randomNumb()]
    }
    
    p.style.backgroundColor = hexColor;
    div1.style.backgroundColor = colorPicker;
    divCircle= document.querySelector('#circle').style.animation='idle 6s linear infinite';
   
    
   

function randomNumb() {
   
    return Math.floor(Math.random() * hex.length);
    return Math.floor(Math.random() * color.length);

}
        
    })
    
   




