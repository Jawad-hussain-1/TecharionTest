import React,{useState} from "react";
const axios  =require("axios");

export default function Fetchlist() {
    const [list,setlist]=useState([]);
    function getlist() {

        axios.get("https://gorest.co.in/public/v1/todos").then(function (response){
            console.log(response.data.data);
            setlist(response.data.data);
        });
    }

return (
    <div>
        <button onClick={getlist}>Fetchlist</button>
        <div 
        style={{
            display: "grid",
            gridTemplateColumns:"auto auto auto",
            width:600,
        }}>
            {list.map((data) => {
                return (
                    <li style={{listStyleType:"none"}}>
                        <div 
                        style={{
                            backgroundcolor:"grey",
                            gridColumnEnd: 3,
                            margin:10,
                            width:200,
                            height:200,
                        }}>
                            {data.title}
                        </div>
                    </li>
                );
            })}
        </div>

    </div>
);
        }