import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemDetailContainer />
      {/* <ItemCount inicial={0} stock={5} onAdd={(cant)=> console.log('Cantidad agregada ',cant)} /> */}

    </div>
  );
}

export default App;
