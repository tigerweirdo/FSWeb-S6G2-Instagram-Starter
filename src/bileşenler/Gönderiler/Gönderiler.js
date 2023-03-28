import React from "react";
import Gönderi from "./Gönderi";
import "./Gönderiler.css";

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {" "}
      {gonderiler.map((x) => (
        <Gönderi gönderi={x} gonderiyiBegen={gonderiyiBegen} key={x.id} />
      ))}
    </div>
  );
};

export default Gönderiler;