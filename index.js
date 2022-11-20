// Generare in pagina 5 numeri casuali
const playButton = document.getElementById('play');
playButton.addEventListener('click',
    function(){
        const myContainer = document.getElementById('container_input');
        // genero 5 numeri
        const myArrNum = genArrNumUniciRandomMinMax(5, 1, 5);
            console.log(myArrNum);
        let numbersSpown = document.getElementById('numbers').innerHTML = `Numeri casuali:  ${myArrNum}`

        let reverseTimer;
        let timerSet = 30;
        // collego il seconds view
        let viewTime = document.getElementById('cont-down');
        reverseTimer = setInterval(function() {
           if(timerSet != 0){
            timerSet--;
            // inserisco i sec in html
            viewTime.innerHTML = timerSet;
           }

        }, 1000);
        console.log(reverseTimer);
    }
);






// Functions       //argomenti
function createBox(tipoElemento, classe, insertData){
    // Creo un elemento div
    const mioElemnt = document.createElement (tipoElemento);
    mioElemnt.classList.add(classe);
    // Aggiungo un parametro alla funzione per aggiungere gli elementi
    const addData = document.createTextNode(insertData);
    mioElemnt.appendChild(addData);

    return mioElemnt;
}

// Generate Random numbers
function randomInteger(min, max){
    return(Math.floor(Math.random() * ((max + 1) - min) + min));
}

function genArrNumUniciRandomMinMax(howMany, minNum, maxNum) {
    // Numero random tra min-max
    const newArr = [];
    // generare un arrey di howmany elements
    while (newArr.length < howMany){
        let newNumber = randomInteger(minNum, maxNum);
        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }
    return newArr;
}

