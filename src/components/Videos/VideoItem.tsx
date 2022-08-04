import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { Video } from "./Video";

import "./VideoItem.css";
import { deleteVideo } from "./VideoService";

interface Props {
  video: Video;
  loadVideos: () => void;
}

export const VideoItem = ({ video, loadVideos }: Props) => {
  let navigate = useNavigate();

  const handleDelete = async (id: String) => {
    await deleteVideo(id);
    loadVideos();
  };

  return (
    <div key={video._id} className="video-card">
      <span onClick={() => video._id && handleDelete(video._id)}>X</span>
      <h1 onClick={() => navigate(`/update/${video._id}`, { replace: true })}>
        {video.title}
      </h1>
      <p>{video.description}</p>
      <ReactPlayer url={video.url} />
    </div>
  );
};
