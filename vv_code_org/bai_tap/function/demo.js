// khai bao ham , ten ham , co 1 tham so dau vao
// do la tham so muon tinh binh phuong
function square(number) {
    let result = number * number;
    return result;
}
function calculate() {
    let input = document.getElementById("input").value;
    let result = square(input);
    document.getElementById("result").innerHTML = result;
}

//  let squareof2 = square( 2);
// document.write(" Square of 2 is: " + squareof2 + "<br>");
//
// let squareof5 = square( 5);
// document.write(" Square of 5 is: " + squareof5);