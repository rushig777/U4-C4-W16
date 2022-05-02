// use axios for api call
import axios from "axios";
import { GET_DATA } from "./actionTypes";




const  getProductsData = async (dispatch)=> {
   

    try {
        const res = await axios.get('https://movie-fake-server.herokuapp.com/products');
       
        let Data= await res.data;
        dispatch({
            type:GET_DATA,
            payload:Data,
        })
        
      } catch (error) {
        console.error(error);
      }
      

}

const sortProducts = (dispatch,type) => {

    dispatch({
        type:type,
    })


};

const filterProducts = (dispatch,type) => {
    dispatch({
        type:type,
    })
};

export { getProductsData, sortProducts, filterProducts };
