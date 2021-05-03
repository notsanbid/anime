import AnimeCard from './AnimeCard';
const Renderer = ({topAnime}) => {
    return (
        <main>
            <div className="anime-list">
                {topAnime.map(anime => (
                        <AnimeCard anime={anime} key={anime.mal_id}/>
                ))}
            </div>
        </main> 
        
     );
}
 
export default Renderer;