import { GET_DATA, HIGH_TO_LOW, HOMEDECOR, KIDSDATA, LOW_TO_HIGH, MENDATA, WOMENDATA } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState,{ type, payload }) => {

  switch(type){

    case GET_DATA:
      return{
        ...state,
        data:payload,
      }
      case HIGH_TO_LOW:
      const  sortdata= state.data.sort((a,b)=>{
        return a.price-b.price;
      })
        return{
          ...state,
          data:sortdata,
        }
        case LOW_TO_HIGH:
      const  LOWdata= state.data.sort((a,b)=>{
        return a.price-b.price;
      })
        return{
          ...state,
          data:LOWdata,
        }
        case MENDATA:
          const Mdata=state.data.filter((el)=>{
            if(el.category==="men"){
              return el;
            }
            return{
              ...state,
              data:Mdata,
            }
          })
          case WOMENDATA:
            const Wdata=state.data.filter((el)=>{
              if(el.category==="women"){
                return el;
              }
              return{
                ...state,
                data:Wdata,
              }
            })
            case KIDSDATA:
              const Kdata=state.data.filter((el)=>{
                if(el.category==="kids"){
                  return el;
                }
                return{
                  ...state,
                  data:Kdata,
                }
              })
          return{
            ...state,
            data:payload,
          }
          case HOMEDECOR:
            const Hdata=state.data.filter((el)=>{
              if(el.category=="homedecor"){
                return el;
              }
              return{
                ...state,
                data:Hdata,
              }
            })
        return{
          ...state,
          data:payload,
        }
  
  default:{
    return state;
  }
}
};
export { reducer };
