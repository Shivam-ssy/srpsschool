import { db } from "./config";
import {  getDoc,doc} from 'firebase/firestore';

const getSiteData= async()=>{
    try {
        const id="www.kindedo.in"
        const listRef=doc(db,"sites",id);
        const snapshot=await getDoc(listRef);
        const listData=snapshot.data()
        console.log(listData);
        return listData;        
    } catch (error) {
        console.log("error at firebase",error);
        
    }
    
}


export {getSiteData}