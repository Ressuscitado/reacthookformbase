"use client";

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

const Page = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const openModal = (id: number) => {
    const index = photoList.findIndex(item => item.id === id);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setShowModal(true);
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  }
  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photoList.length - 1 : prevIndex - 1
    );
  };
  
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photoList.length - 1 ? 0 : prevIndex + 1
    );
  };
  

  return (
    <div className="mx-2 bg-black">
      <h1 className="text-center text-3xl font-bold my-10">Galeria de Fotos</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem 
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal && 
        <Modal 
        image={photoList[currentImageIndex].url} 
        showPreviousImage={showPreviousImage}
        showNextImage={showNextImage}
        closeModal={closeModal} 
        />
      }

    </div>
  );
}

export default Page;