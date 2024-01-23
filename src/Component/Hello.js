import React,{useContext,useState,useEffect} from "react";
import styleContext from "../context/styleContext";


const Hello = () => {
    const {theme,lightTheme,darkTheme} = useContext(styleContext);
    const [isDark, setIsDark] = useState(false);

    useEffect(()=>{
        let currentTheme = localStorage.getItem("isDark");
        setIsDark(currentTheme=="true"?true:false);
        console.log(currentTheme, typeof(currentTheme))
        if(currentTheme == "false"){
             lightTheme();   
        }
        else{
            darkTheme();
        }
    },[])

    function switchTheme(){
        if(isDark == false){
            darkTheme();
            
        }
        else{
            lightTheme();
        }
        let currentTheme = !isDark;
        setIsDark(currentTheme);
        localStorage.setItem("isDark",currentTheme);
    }

    return (
        <div>
            <div style={theme}>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate atque harum, adipisci esse eos eveniet optio ex error aliquam quasi officia cumque sunt veritatis voluptatum! Eveniet quas minus quo voluptas placeat dolores incidunt nihil! Animi reiciendis aspernatur totam quam? Illo consectetur cupiditate ipsum provident ducimus ad at ex nobis!</p>
                <ol>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ol>
            </div>

            <button onClick={switchTheme}> Switch Theme </button>







            {/* <button onClick={darkTheme}>Switch to Dark</button>
            <button onClick={lightTheme}>Light Theme</button> */}
            {/* <button
             onClick={
                ()=>setTheme({
                    color: "white",
                    backgroundColor: "black",
                    border: "2px solid green"
                })
             }
            > Switch to Dark</button> */}
        </div>
    )
}

export default Hello;