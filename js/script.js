const number1=document.getElementById('number1');
const number2=document.getElementById('number-2');
const resultElement=document.getElementById('result');
const operator=document.getElementById('calculations-select');
const button=document.getElementById('button');
button.onclick=function(){
    const num1=Number(number1.value);
    const num2=Number(number2.value);
    const selectoperator=operator.value; 
    let result;
    switch(selectoperator){
        case 'plus':
            result=num1+num2;
            break;
        case 'minus':
            result=num1-num2;
            break;
        case 'division':
            // if (num2 ===""){
            //     resultElement.textContent='Введите число';
            // }
            result=num1/num2;
            break;
        case 'multiplication':
            result=num1*num2;
            break;
        default:
            resultElement.textContent='ошибка';
            return;
    }
    resultElement.textContent=result;
};