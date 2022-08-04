import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Video } from "./Video";
import { createVideo, getVideo, updateVideo } from "./VideoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export function VideoForm() {
  let navigate = useNavigate();
  let params = useParams();

  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });

  const getSingleVideo = async (id: String) => {
    const res = await getVideo(id);
    const { title, description, url } = res;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getSingleVideo(params.id);
  }, []);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!params.id) {
      await createVideo(video);
    } else {
      await updateVideo(params.id, video);
    }

    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Write a title for this video"
        autoFocus
        onChange={handleInputChange}
        value={video.title}
      />
      <input
        type="text"
        name="url"
        placeholder="https://somesite.com"
        onChange={handleInputChange}
        value={video.url}
      />
      <textarea
        name="description"
        rows={3}
        placeholder="Write a description"
        onChange={handleInputChange}
        value={video.description}
      ></textarea>
      {params.id ? (
        <button type="submit">Update Video</button>
      ) : (
        <button type="submit">Create Video</button>
      )}
    </form>
  );
}
