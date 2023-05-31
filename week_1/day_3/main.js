function fibSequence() {
    let value1 = 0;
    let value2 = 1;
    let newValue;
    for (let i = 0; i < 10; i++) {
        console.log(value1);
        newValue = value1 + value2;
        value1 = value2;
        value2 = newValue;
    }
}

fibSequence();

//hayley's function

function fibonacci() {
    let last = 0;
    let cur = 1;
    for (let i =0; i<10; i++) {
        console.log(cur);
        temp = cur;
        cur = cur+last;
        last = temp;
    }
}
