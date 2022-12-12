import Nav from './navb';
import './App.css';
import AddMovie from './Addmovie';
import { MovieProvider } from './MovieContext';
import MovieList from './movieList';

export function App()
{
  return (
    
          <div style={{ textAlign: "center" }}>
            <MovieProvider>
            <Nav/>
            {/* <AddMovie/>  */}
            <MovieList/>
            </MovieProvider>
           </div>
    
      );
      }
    
export default App;