function theWorld(ms){
    console.log('Выведется до остановки времени');
    let standEnd = new Date().getTime() + ms
    let standDuration = setInterval( function(){
        left = Math.round((standEnd - new Date().getTime())/1000)
        if (left > 0) {
            console.log(`Time will continue running in ${left}`)
        } else {
            clearInterval(standDuration)
            console.log('Выведется после того, как время продолжит ход');
        }
        
    }, 1000)

}




theWorld(4000);


