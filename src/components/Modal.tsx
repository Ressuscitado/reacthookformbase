type Props = {
    image: string;
    showPreviousImage: () => void;
    showNextImage: () => void;
    closeModal: () => void;
};

export const Modal = ({ image, showPreviousImage, showNextImage, closeModal }: Props) => {
    return (
        <>
            <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <button 
                    onClick={showPreviousImage} 
                    className="absolute left-5 text-white text-3xl bg-black/50 p-2 rounded-full cursor-pointer"
                >
                    {"<"}
                </button>
                <img 
                    src={`/assets/${image}`} 
                    alt=""
                    className="max-h-screen max-w-full"
                />
                <button 
                    onClick={showNextImage} 
                    className="absolute right-5 text-white text-3xl bg-black/50 p-2 rounded-full cursor-pointer"
                >
                    {">"}
                </button>
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </>
    );
};
