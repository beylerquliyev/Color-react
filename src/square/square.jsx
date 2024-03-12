import styles from "../square/style.module.css";

export function Square(){
    let arr=["card1","card2","card3","card4","card5","card6","card7","card8","card9",]

    let randomNumber2 = Math.floor(Math.random() * arr.length);
   
    function ChangeColor(e){
        let randomNumber = Math.floor(Math.random() * arr.length);
        e.target.className=styles[arr[randomNumber]]
        console.log(e.target.className);
      


    }




return(
     
    <div className={ styles[arr[randomNumber2]]} onClick={ChangeColor}  >
        

    </div>

)
   
}