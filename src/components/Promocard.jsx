// eslint-disable-next-line react/prop-types
const Promocard = ({nome, img}) => {
    return ( <div style={{backgroundColor:'#D8E3F2', borderRadius:'10px', display:'flex' }}>
     
      

        <div>
          <h6 style={{backgroundColor:'rgba(231, 255, 134, 1)', marginLeft:'40px', maxWidth:'90px', padding:'5px', borderRadius:'50px', marginTop:'50px', textAlign:'center'}}>30% OFF</h6>
          <h1 style={{marginLeft:'40px', fontSize:'23px'}}>{nome}</h1>
          <h6 style={{backgroundColor:'white', marginLeft:'40px',maxWidth:'120px', color:'#C92071', borderRadius:'5px', padding:'10px', textAlign:'center'}}>Comprar</h6>
        </div>
        <div style={{}}>
          <img src={img}/>
        </div>




    </div>);
  }
   
  export default Promocard;



  


