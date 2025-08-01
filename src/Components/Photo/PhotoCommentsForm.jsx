import React from "react";
import EnviarSvg from "../Svg/EnviarSvg";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import Error from "../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        <EnviarSvg />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;
