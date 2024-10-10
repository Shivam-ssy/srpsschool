import { db } from "./config";
import {  getDocs,collection} from 'firebase/firestore';

const getSiteData= async()=>{
    try {
        
        const listRef=collection(db,"sites");
        const snapshot=await getDocs(listRef);
        const listData=snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        // console.log(listData);
        return listData;        
    } catch (error) {
        console.log("error at firebase",error);
        
    }
    
}


export {getSiteData}