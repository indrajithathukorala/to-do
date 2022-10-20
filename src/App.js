import Moratuwa from "./test/moratuwa";

const App = () => {
  let name = ['sda','asdas','dasda'];
  let obj = {
    nameList: name,
    age:22,
    address:"dasdasdas"
  }

  function hello() {
    console.log(obj);
  }
  
  return (
   <>
   <Moratuwa ischelded={true} data={name} ado={'hello '} adomk={'campus'} onchildClick={hello}/>
   <button onClick={hello}>dasdsdas</button>
    
   </>
  )
}

export default App;