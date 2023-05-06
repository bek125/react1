import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { List } from "../Components/List";
import axios from "axios";

 export function Users(){
    let [userData, setData] = useState([]);

    useEffect(() => {
      axios.get("https://reqres.in/api/users").then(json => setData(json.data.data));
    }, [])
    return (
        <>
        <Header/>
         <main>
           { <List userData={userData } />}
         </main>
        
        
        </>

    )
 }