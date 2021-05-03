const MainContent = (props) => {
    return ( 
        <main>
            <div className="main-head" onSubmit={props.handleSearch}>
                <form className="search-box">
                    <input type="search" placeholder="Search for an Anime..." required values={props.search} onChange={e => props.setSearch(e.target.value)}/>
                </form>
            </div>
        </main>
     );
}
 
export default MainContent;