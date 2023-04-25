const Song = () => {
    return (
        <div className="grid absolute inset-x-0 bottom-20">
        <div className="flex justify-center items-center">
        <h1 className="text-lg badge glass">Relaxing song</h1>
        </div>
        <div className="flex justify-center items-center m-4">
        <iframe id="spotify" width="80%" height="80" frameborder="0" allowfullscreen="" data-src="https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" src="https://open.spotify.com/embed/album/05WYfOdYRlapM87Fy9r2rs?utm_source=generator"></iframe>
        </div>
        </div>
    )
}

export default Song;