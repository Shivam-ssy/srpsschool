import React from "react";
import ShowContext from "./ShowContext.js";
import { useState,useEffect } from "react";
import { getSiteData } from "../BackendAsService/features.js";
const ShowContextProvider = ({children}) => {
    const [siteData,setSiteData]=useState(null)
  useEffect(()=>{
    const fetchdata=async()=>{
      const data= await getSiteData()
      setSiteData(data[0].siteData)
    }
    fetchdata()
  },[])
    return(
        <ShowContext.Provider value={{siteData}}>    
        {children}
        </ShowContext.Provider>
    )
   
}
export default ShowContextProvider