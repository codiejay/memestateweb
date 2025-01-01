import { useModal } from "../../context/VideoContext";

const VideoModal = () => {
  const { closeModal } = useModal();
  return (
    <div className="fixed  w-screen z-[9999999] justify-center flex  h-screen top-10">
      <div className="border-[12px] border-[#282B7F] h-[647px] max-w-[1102px] rounded-[32px] overflow-hidden w-full bg-black">
        <div className="w-full border-[10px] border-white h-full relative">
          <div className="absolute right-4">
            <button onClick={closeModal}>
              <img src="/images/cancel.png" alt="" className="h-14" />
            </button>
          </div>
          {/* <video src=""></video> */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZR8huunyCIw?si=Mg1h6puZ6RMp9QRu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
