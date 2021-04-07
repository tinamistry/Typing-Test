

    window.addEventListener('keydown', kbd);
    let start;
    let end;
    let time;
    let currentLetter=65;
    let alphabetCounter = 0;
    function kbd(event) {

        let letter = document.getElementById('letter');
        let key = event.keyCode;
        let prev = currentLetter - 1;
        let next = currentLetter + 1;
        if(key===65 && currentLetter===65){
            start=Date.now();
        }
        if(key > prev && key < next){
            document.getElementById('letter').innerHTML = (event.key).toUpperCase();
            currentLetter += 1;
            alphabetCounter += 1;
        }
        else
            {
            alert((event.key).toUpperCase() + ' is not the next letter');
        }
        if( key === 90 && currentLetter===91 && alphabetCounter===26){
            end=Date.now();
            time=(end-start)/1000;
            message(time);

        }


    }
    function message(time){
        document.getElementById('letter').innerHTML = 'It took you ' +  time + ' seconds to type the alphabet';

    }





