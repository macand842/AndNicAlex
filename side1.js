function findSumOfNumbers(){
    let input1 = document.getElementById("number1").value;
    let input2 = document.getElementById("number2").value;

    sum = 0;
    
    if(1000 % input1 == 0 || 1000 % input2 == 0)
    {
        for(i = 0; i <= 1000; i++)
        {
            if(i % input1 == 0 || i % input2 == 0){
                sum += i;
            }
        }
    }

    console.log(sum);
}