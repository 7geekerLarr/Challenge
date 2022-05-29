import { useEffect, useState   } from "react";
import postDB from '../Api/ApiConnect';



export const usePost =  (rutaHttp) => {    
 const [isLoading, setIsLoading ] = useState(true);
 const [registers, setRegisters ] = useState([]);

  useEffect(() => {
    const getQry = async () =>{    
      const result = await  postDB.get(rutaHttp);  
      setRegisters(result.data);
      
      setIsLoading(false);
     
    }
    getQry();
  }, [])

  

  return{
    registers,
    isLoading
  }
}
