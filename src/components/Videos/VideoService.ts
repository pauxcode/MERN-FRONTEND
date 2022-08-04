import { Video } from "./Video";

const API = "http://localhost:3000";

export const createVideo = (data = {}) => {
  return fetch(`${API}/videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
};

export const getVideos = () => {
  return fetch(`${API}/videos`).then((res) => {
    return res.json();
  });
};

export const getVideo = (id: String) => {
  return fetch(`${API}/videos/${id}`).then((res) => {
    return res.json();
  });
};

export const updateVideo = (id: String, video: Video) => {
  return fetch(`${API}/videos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  }).then((res) => {
    return res.json();
  });
};

export const deleteVideo = (id: String) => {
  return fetch(`${API}/videos/${id}`, {
    method: "DELETE",
  }).then((res) => {
    return res.json();
  });
};
