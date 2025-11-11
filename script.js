const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => b !== 0 ? ( a / b ).toFixed(2):  "can not be divide by 0"
};
function perform(opertion){
    const n1= parseFloat($("#num1").val());
    const n2= parseFloat($("#num2").val());
    const $resultFiled = $("#result");

    if (isNaN(n1) || isNaN(n2))  {
        $resultFiled.text("Enter Valid Number!")
        .removeClass("text-info")
        .addClass("text-danger")
    return;      
    }
    const result = calculator[opertion](n1, n2);
    $resultFiled.text(result)
               .removeClass("text-danger")
               .addClass("text-info")
}