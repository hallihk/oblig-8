import {Route, Routes} from 'react-router-dom'
import Movies from './components/Movies';
import Actors from './components/Actors';
import Nav from './components/Nav';
import Actor from './components/Actor';

function App() {
  return (
    <div>
      <Nav></Nav>
        <Routes>
          <Route index element={<Movies />} />
          <Route path="movies">
            <Route index element={<Movies />} />
          </Route>
          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path=":name" element={<Actor />} />
          </Route>

        </Routes>
      </div>
  );
}

export default App;
