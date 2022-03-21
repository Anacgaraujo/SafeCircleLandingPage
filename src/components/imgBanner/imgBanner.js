//import "./styles.css";
import { createApi } from "unsplash-js";
import { useEffect, useState } from "react";

const unsplash = createApi({
  accessKey: "lWaadUjJBoVg_DtoJm9aWBgufk1TNKxWA_zaAjdHFvM"
});

export default function Images() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: "friends",
        
        orderBy: "relevant",
      })
      .then((data) => {
          console.log(data);
        setPhotos(data.response.results);
      })
      .catch((err) => console.log({ err }));
  }, []);

  return (
    <div
      className="banner"
      style={{ columnCount: "8", columnGap: "1rem", rowGap: "1rem" }}
    >
      {photos.map((photo) => (
        <img key={`image-${photo.id}`} src={photo.urls.thumb} alt={photo.id} />
      ))}
    </div>
  );
}

