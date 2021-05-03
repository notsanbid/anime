
const Navbar = ({GetTopAnime}) => {
    return ( 
        <div className="content-wrap topnav">
            <div>
                <button className="but tv" onClick={() => GetTopAnime('tv')}>Top TV Series</button>
                <button className="but movie" onClick={() => GetTopAnime('movie')}>Top Movies</button>   
            </div>
            <div>
                <button className="but popu" onClick={() => GetTopAnime('bypopularity')}>Most Popular</button>
                <button className="but fav" onClick={() => GetTopAnime('favorite')}>Most Favourite</button>
            </div>  
        </div>
     );
}
 
export default Navbar;