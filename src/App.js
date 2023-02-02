import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './components/data.json'

function App() {
  // let login = true;

  return (
    <div className="App">  
    {/* {
          (()  => {
            if (login){
              return <h1 style={{color: "white"}}>Welcome to movie store</h1>
            } else{
              return <h1 style={{color: "white"}}>Movie not display</h1>
            }
          }) ()
    } */}
     <Header/>

     <div className='main'>
    {
        movies.map((element,index) => {
        return (
     <Movie
      key={index}
      title={element.Title}
      year={element.Year}
      img={element.Poster}
     />
        )
        })
    } 
     </div>     
    </div>
     
  );
}
export default App;
