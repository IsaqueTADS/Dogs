import React from "react";
import FeedPhotoItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      console.log(url, options);
      const { response, json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotoItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default FeedPhotos;
