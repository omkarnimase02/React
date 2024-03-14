
import {useState, useEffect} from "react"

function useCurrencyInfo(currency){

    const[data,setdata] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jadelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json)// convert dtring to json
        .then((res)=> setdata(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;
// `https://cdn.jadelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`