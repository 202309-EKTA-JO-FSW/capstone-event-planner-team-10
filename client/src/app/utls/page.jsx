"use client";
import React, { useState } from "react";
import { imageDb } from "./config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function firebaseimage() {
  const [img, setImg] = useState("");

  const handleClick = () => {
    const imgRef = ref(imageDb, `files/${v4()} `);
    uploadBytes(imgRef, img);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
    </div>
  );
}

export default firebaseimage;
