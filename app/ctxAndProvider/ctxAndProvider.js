
"use client"

import { createContext, useReducer, useContext } from 'react'

// const StoreContext = createContext();
const AppContext = createContext();

const InitialState = {
  msg: "",
  errMsg: "",
  loading: null,
  morePagesData: [],
  shopPagesData : [] , 
}


const StoreReducer = (state, action) => {


  if (action.type === "loadingTrue") {
    return {
      ...state,
      loading: true
    }
  }
  else if (action.type === "displayMsg") {
    return {
      ...state,
      errMsg: action.payload
    }
  }
  else if (action.type === "morePageData") {
    return ({
      ...state,
      loading: false,
      morePagesData: action.payload
    })
  }
  else if (action.type === "shopPageData") {
    return ({
      ...state,
      loading: false,
      shopPagesData: action.payload
    })
  }

  return state;
}

const CtxAndProvider = ({ children }) => {

  const [state, dispatch] = useReducer(StoreReducer, InitialState);

  const setLoading = async () => {
    dispatch({
      type: "loadingTrue"
    })
  }
  const fetchMoreDataFromServer = async () => {
    const url = `https://genuinelicense.store/wp-json/wp/v2/pages`;
    try {
      const response = await fetch(`${url}`)
      const res = await response.json();
      if (res) {
        dispatch({
          type: "morePageData",
          payload: res,
          loading: false,
        })
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "displayMsg",
        payload: "Something Went Wrong!!!"
      })
    }
  }



  const fetchShopDataFromServer = async () => {
    const apiUrl = `https://genuinelicense.store/wp-json/wc/v3/products`
    const consumerKey = `ck_e63a2d33ab1977ae80821686a0c659efb61880d4`
    const consumerSecret = `cs_550b7ac16c2c924ae4ef1db3760747046ac4fa9a`
    try {
      const response = await fetch(`${apiUrl}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`)
      const res = await response.json();
      if (res) {
        dispatch({
          type: "shopPageData",
          payload: res,
          loading: false,
        })
      }
    } catch (error) {
      dispatch({
        type: "displayMsg",
        payload: "Something Went Wrong!!!"
      })
    }
  }



  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        fetchMoreDataFromServer,
        fetchShopDataFromServer
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useStoreCtx = () => {
  return useContext(AppContext)
}

export default CtxAndProvider