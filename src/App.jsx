import { Square } from "./square/square";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./square/style.module.css"
function App() {


  return (

    
<div className={style.fullDiv2}>


<div className= {`container ${style.fullDiv}`}>
<Square/>
<Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/>
<Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/><Square/>
<Square/><Square/><Square/>
</div>

</div>
  );
}

export default App;
