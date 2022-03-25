import REact ,{useState} from "react";

function Counter() {
    const [count,setcount]=useState(0);

    const ADD=() => {
        setcount(count+3);

    };
    const Sub=() => {
        if(count>0){
            setcount(count-3);
        }else{
            setcount(0);
        }
        };
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={Add}>+</button>
                <button onClick={Sub}>-</button>
            </div>
        );
    }

    export default Counter;
