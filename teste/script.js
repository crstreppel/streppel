let obj = (function(){
    let num1 = 5;
    let num2 = 3;

    function soma(){
        console.log(num1 + num2);

    }

    return {
        soma,
        setNum1: function(n1){
            num1 = n1;
        },
        setNum2: function(n2){
            num2 = n2;
        }
    }
})()