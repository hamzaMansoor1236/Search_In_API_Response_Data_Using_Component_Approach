function Btn(props) {
 


    return (
      <button type={props.type} className={props.classname} onClick={props.funClick}   >{props.text} </button>
        );
  }
  
  export default Btn;