import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import ProvinsiTable from "../../components/ProvinsiTable/ProvinsiTable";
import FormCovid from "../../components/FormCovid/FormCovid";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  const initialProvinsiData = [
    {
      kota: "Jakarta",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Jawa Barat",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Jawa Tengah",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Jawa Timur",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Banten",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Yogyakarta",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Kalimantan Timur",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    },
    {
      kota: "Bali",
      kasus: 0,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    }
  ];

  const [provinsiData, setProvinsiData] = useState(initialProvinsiData);

  const updateProvinsiTable = (newData) => {
    setProvinsiData([...provinsiData, newData]);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <GlobalSection />
      <ProvinsiTable initialData={provinsiData} />
      <FormCovid onUpdateProvinsiTable={updateProvinsiTable} />
      <Footer />
    </div>
  );
}

export default HomePage;
