
function Input(props) {
 


    return (
        <input
        
          type="search"
          className={props.classname}
          placeholder={props.placeholder}
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={props.funChange}
          id={props.id}
          value={props.value}
        />
        );
  }
  
  export default Input;
  