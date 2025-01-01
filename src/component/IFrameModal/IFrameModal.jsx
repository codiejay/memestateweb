import { useIframeModal } from "../../context/IframeContext";

const IFrameModal = () => {
  const { closeModal } = useIframeModal();
  return (
    <div className="fixed  w-screen z-[9999999] justify-center flex  h-screen items-center  top-10">
      <div className="border-[16px] border-[#000] h-[647px] max-w-[1102px] rounded-[32px] w-full bg-black">
        <div className="w-full border-[10px] border-white h-full  relative overflow-hidden ">
          <div className="absolute right-4">
            <button onClick={closeModal}>
              <img src="/images/cancel.png" alt="" className="h-14" />
            </button>
          </div>
          <iframe
            src="https://tokentool.bitbond.com/tokensale/0xA70d3503Ba27d1Fe061d4e19dc232d6C75ed274D?chainId=8453"
            width="100%"
            height="100%"
            frameBorder="0"
            name="tokensale"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IFrameModal;