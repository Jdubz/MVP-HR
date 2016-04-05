var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video =>
        <VideoListEntry video = {video} setPlayer={props.setPlayer}/>
    )}
  </div>
);

window.VideoList = VideoList;
