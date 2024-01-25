import { useEffect ,useState  } from "react" ;



const UseCurrency = (currency)=>{
     const [data , setData] = useState({}) ;
    useEffect(()=>{


        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) =>response.json())
        .then((response) => {
            
           
            return setData(response[currency])}) ;

    },[currency]) ;



    return data ;

}


export default UseCurrency ;

