import { useEffect, useState } from "react";
import { Video } from "./Video";
import { getVideos } from "./VideoService";
import { VideoItem } from "./VideoItem";

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await getVideos();

    const formatedVideos = res
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => {
        return (
          <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
        );
      })}
    </div>
  );
};

export { VideoList };
