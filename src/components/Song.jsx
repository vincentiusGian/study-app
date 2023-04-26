const Song = () => {
    const playlistId = '0FFz6sc0xHLTwohftrnKsa';
    
    return (
        <div className="grid absolute inset-x-0 bottom-20 mt-3 ">
        <div className="flex justify-center items-center m-4 ">
        <iframe
  title="Spotify Embed: Recommendation Playlist "
  src={`https://open.spotify.com/embed/playlist/0FFz6sc0xHLTwohftrnKsa?utm_source=generator&theme=0`}
  width="100%"
  height="100%"
  style={{ minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
        </div>
        </div>
    )
}

export default Song;