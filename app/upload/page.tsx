"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

function UploadPage() {
  const [publicId, setPublicId] = useState("");

  if (publicId)
    return <CldImage src={publicId} width={270} height={180} alt="my photo" />;

  return (
    <CldUploadWidget
      uploadPreset="nzna1rxi"
      onUpload={(result, widget) => {
        // console.log("RESULT: ", result);
        const info = result.info as CloudinaryResult;
        if (result.event !== "success") return;
        setPublicId(info.public_id);
      }}
      options={{
        sources: ["local", "unsplash"],
        multiple: false,
        maxFiles: 5,
      }}
    >
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
}

export default UploadPage;
