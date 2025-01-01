import { useModal } from "../../context/VideoContext";

const VideoModal = () => {
  const { closeModal } = useModal();
  return (
    <div className="fixed  w-screen z-[9999999] justify-center flex  lg:h-screen h-fit top-10">
      <div className="border-[12px] border-[#282B7F] lg:h-[647px] h-full max-w-[1102px] rounded-[32px] overflow-hidden w-full bg-black">
        <div className="w-full border-[10px] border-white h-full relative">
          <div className="absolute right-4 z-50">
            <button onClick={closeModal}>
              <img src="/images/cancel.png" alt="" className="h-14" />
            </button>
          </div>
          <video
            src="/video/memestate.mp4"
            className="object-cover w-full"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
