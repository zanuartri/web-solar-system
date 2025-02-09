import React, { useState } from "react";

const OrbitInfo = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg text-white z-50 text-sm font-bold flex flex-col gap-[12px]">
      <p>Penjelasan tentang orbit</p>
      <div>
        <p>Semi-Major Axis</p>
        <p className="font-light">
          Merupakan jarak rata-rata planet dari Matahari dalam orbit elipsnya.
          Bumi = 1 AU.
        </p>
      </div>
      <div>
        <p>Eccentricity</p>
        <p className="font-light">
          Mengukur seberapa lonjong orbit planet. Nilai 0 berarti orbit bulat
          sempurna, semakin mendekati 1 berarti semakin lonjong.
        </p>
      </div>
      <div>
        <p>Inclination </p>
        <p className="font-light">
          {" "}
          Adalah sudut kemiringan orbit planet terhadap bidang orbit Bumi
          (ekliptika). Bumi = 0° (referensi).
        </p>
      </div>
    </div>
  );
};

export default OrbitInfo;
