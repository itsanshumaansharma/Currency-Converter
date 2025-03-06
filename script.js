// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${TransformStreamDefaultController.value.toLowerCase()}.json`;

// const apiKey = "3592052121c0a777ae19a6bc";
const dropdowns = document.querySelectorAll(".dropdown select");
for(let select of dropdowns){ //It is selects two select tags.
    for(let currCode in countryList){ //It is iterates all keys as currCode of countryList Object;
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        //It is for default selection
        if(select.name === "from" && currCode === 'USD'){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === 'INR'){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    //After clicking the options flag then its made changes so it will change the flag according to country code; 
    select.addEventListener("change",(evt)=>{
        // console.log(evt.target);
        //This will show that target point where the changes made.
        updateFlag(evt.target);
    });
}




const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const updateExchangeRate = async (evt)=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" ||  amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }

    // console.log(fromCurr.value);
    // console.log(toCurr.value);
    
    const URL = `https://v6.exchangerate-api.com/v6/3592052121c0a777ae19a6bc/latest/${fromCurr.value.toLowerCase()}`;
    msg.innerText = "Getting Exchange Rate.....";
    let response = await fetch(URL);
    console.log(response);
    let result = await response.json();
    console.log(result);
    let exchangeRate = result.conversion_rates[toCurr.value];
    let finalAmount = amtVal * exchangeRate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

const updateFlag = (element)=>{
    let currCode = element.value;//INR
    let countryCode = countryList[currCode]//IN
    // console.log(currCode, countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; //Update the image
    let img = element.parentElement.querySelector("img"); //parent element is div class="select-container"
    // let img = document.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();  //It is clear the button behaviour as default 
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });



//   Api json object in future api is not working then i will use this
//   {
//     "result":"success",
//     "documentation":"https://www.exchangerate-api.com/docs",
//     "terms_of_use":"https://www.exchangerate-api.com/terms",
//     "time_last_update_unix":1741219201,
//     "time_last_update_utc":"Thu, 06 Mar 2025 00:00:01 +0000",
//     "time_next_update_unix":1741305601,
//     "time_next_update_utc":"Fri, 07 Mar 2025 00:00:01 +0000",
//     "base_code":"USD",
//     "conversion_rates":{
//      "USD":1,
//      "AED":3.6725,
//      "AFN":73.2607,
//      "ALL":93.2160,
//      "AMD":394.2891,
//      "ANG":1.7900,
//      "AOA":921.2872,
//      "ARS":1064.3800,
//      "AUD":1.5830,
//      "AWG":1.7900,
//      "AZN":1.7005,
//      "BAM":1.8182,
//      "BBD":2.0000,
//      "BDT":121.6362,
//      "BGN":1.8193,
//      "BHD":0.3760,
//      "BIF":2976.2723,
//      "BMD":1.0000,
//      "BND":1.3337,
//      "BOB":6.9536,
//      "BRL":5.8853,
//      "BSD":1.0000,
//      "BTN":86.9920,
//      "BWP":13.8357,
//      "BYN":3.2573,
//      "BZD":2.0000,
//      "CAD":1.4356,
//      "CDF":2855.3274,
//      "CHF":0.8898,
//      "CLP":946.2972,
//      "CNY":7.2507,
//      "COP":4168.6886,
//      "CRC":504.5052,
//      "CUP":24.0000,
//      "CVE":102.5037,
//      "CZK":23.2700,
//      "DJF":177.7210,
//      "DKK":6.9266,
//      "DOP":62.4910,
//      "DZD":134.4873,
//      "EGP":50.6672,
//      "ERN":15.0000,
//      "ETB":126.9290,
//      "EUR":0.9296,
//      "FJD":2.3085,
//      "FKP":0.7772,
//      "FOK":6.9271,
//      "GBP":0.7772,
//      "GEL":2.7870,
//      "GGP":0.7772,
//      "GHS":15.5842,
//      "GIP":0.7772,
//      "GMD":72.7952,
//      "GNF":8653.5755,
//      "GTQ":7.7401,
//      "GYD":210.1302,
//      "HKD":7.7713,
//      "HNL":25.6529,
//      "HRK":7.0042,
//      "HTG":131.7199,
//      "HUF":370.2989,
//      "IDR":16319.2361,
//      "ILS":3.6120,
//      "IMP":0.7772,
//      "INR":86.9960,
//      "IQD":1316.6963,
//      "IRR":42197.8492,
//      "ISK":136.8278,
//      "JEP":0.7772,
//      "JMD":157.1953,
//      "JOD":0.7090,
//      "JPY":148.9064,
//      "KES":129.4949,
//      "KGS":87.4396,
//      "KHR":4026.8507,
//      "KID":1.5842,
//      "KMF":457.3391,
//      "KRW":1446.6812,
//      "KWD":0.3091,
//      "KYD":0.8333,
//      "KZT":496.9051,
//      "LAK":21843.6937,
//      "LBP":89500.0000,
//      "LKR":295.0540,
//      "LRD":200.6538,
//      "LSL":18.3396,
//      "LYD":4.9045,
//      "MAD":9.8134,
//      "MDL":18.6036,
//      "MGA":4686.3849,
//      "MKD":58.0932,
//      "MMK":2106.9858,
//      "MNT":3456.4582,
//      "MOP":8.0045,
//      "MRU":40.0858,
//      "MUR":46.1453,
//      "MVR":15.4475,
//      "MWK":1744.0992,
//      "MXN":20.4248,
//      "MYR":4.4309,
//      "MZN":64.0795,
//      "NAD":18.3396,
//      "NGN":1499.0045,
//      "NIO":36.9212,
//      "NOK":10.9523,
//      "NPR":139.1871,
//      "NZD":1.7512,
//      "OMR":0.3845,
//      "PAB":1.0000,
//      "PEN":3.6605,
//      "PGK":4.0825,
//      "PHP":57.2996,
//      "PKR":279.7420,
//      "PLN":3.8657,
//      "PYG":7938.3515,
//      "QAR":3.6400,
//      "RON":4.6466,
//      "RSD":109.3717,
//      "RUB":90.0285,
//      "RWF":1426.2157,
//      "SAR":3.7500,
//      "SBD":8.6446,
//      "SCR":14.6760,
//      "SDG":546.5529,
//      "SEK":10.2320,
//      "SGD":1.3337,
//      "SHP":0.7772,
//      "SLE":22.9991,
//      "SLL":22999.1079,
//      "SOS":573.8549,
//      "SRD":36.0167,
//      "SSP":4507.4838,
//      "STN":22.7755,
//      "SYP":13000.5098,
//      "SZL":18.3396,
//      "THB":33.6346,
//      "TJS":10.9622,
//      "TMT":3.5109,
//      "TND":3.1193,
//      "TOP":2.4038,
//      "TRY":36.4829,
//      "TTD":6.7809,
//      "TVD":1.5842,
//      "TWD":32.7953,
//      "TZS":2587.1033,
//      "UAH":41.3861,
//      "UGX":3683.3376,
//      "UYU":42.7001,
//      "UZS":12885.6593,
//      "VES":64.6116,
//      "VND":25535.9471,
//      "VUV":124.6315,
//      "WST":2.8568,
//      "XAF":609.7854,
//      "XCD":2.7000,
//      "XDR":0.7524,
//      "XOF":609.7854,
//      "XPF":110.9324,
//      "YER":247.7295,
//      "ZAR":18.3380,
//      "ZMW":28.7749,
//      "ZWL":26.6032
//     }
//    }
