function hitOrRun(a, b){
    if (a>b) {
        let rand = Math.round( Math.random() * (a - b) + b )
        isPrime = true
        if (rand == 1) {
            result = "hit";
        }
        else if (rand > 1) {
            for (let index = 2; index < rand; index++) {
                if (rand % index == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                result = 'run';
            } else {
                result = 'hit';
            }
        }
        else {
            result = 'hit';
        }
        return result
    } else {
        let rand = Math.round( Math.random() * (b - a) + a )
        isPrime = true
        if (rand == 1) {
            result = "hit";
        }
        else if (rand > 1) {
            for (let index = 2; index < rand; index++) {
                if (rand % index == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                result = 'run';
            } else {
                result = 'hit';
            }
        }
        else {
            result = 'hit';
        }
        return result
    }
}


console.log(hitOrRun(1, 6))