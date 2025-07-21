import React from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";

const PhotoContent = ({data}) => {
  const {photo, comments} = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.titulo} />
        <div className={styles.details}>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <span className={styles.vizualizacoes}>{photo.acessos}</span>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} {photo.idade <= 1? 'ano' : 'anos'} </li>
            <li>{photo.peso}</li>

          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
