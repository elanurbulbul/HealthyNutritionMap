import Spinner from "react-bootstrap/Spinner";

function BasicExample() {
  return (
    <div style={{
      height:'100vh',
      width:'100vw',
      position:'fixed',
      left:'0',
      right:'0',
      top:'0',
      bottom:'0',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      opacity:'50%',
      backdropFilter:'4px'
    }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default BasicExample;
