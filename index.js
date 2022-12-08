console.log("Hello !! I Am JAvascript");
const from=  document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const convert = document.getElementById("convert");
const amount  = document.getElementById("amount");
// console.log(amount.value)
convert.addEventListener("click" , function(){
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;
    // console.log(amt);
    // console.log(fromCurrency)
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response =>{
        return response.json();
    }).then(data=>{
        // console.log(data);
        let rate = data.rates[toCurrency];
        let total = rate*amt ;
        result.innerHTML = `${amt} ${fromCurrency}  = ${total} ${toCurrency} `;
    });
});