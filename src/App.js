import {useState, useEffect} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Renderer from './components/Renderer';
function App() {
  const [topAnime, setTopAnime] = useState(null);
  const [search, setSearch] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    FetchAnime(search);

  }

  const GetTopAnime = async (id) => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/${id}`)
                            .then(res => res.json());
    setTopAnime(temp.top.slice(0, 50));
  } 

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=50`)
                  .then(res => res.json());
    setTopAnime(temp.results);            
  }

  return (
    <div className="App">
      <Header/>
      <div className="content-wrap topnav">
        <Navbar GetTopAnime={GetTopAnime}/>
        <MainContent handleSearch={handleSearch} search={search} setSearch={setSearch}/>
      </div>
      <div className="content-wrap">
        {topAnime && <Renderer topAnime={topAnime}  />}
      </div>
      
    </div>
  );
}

export default App;
