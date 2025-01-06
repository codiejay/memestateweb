const GlassCard = ({ maxWidth, image, content }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  ">
      <div>
        <img src={`/images/${image}`} alt="road1" className="h-[107px]" />
      </div>

      <div>
        <div
          className={`roadMapCard lg:h-[507px] h-full lg:px-0 px-5  lg:py-0 py-4`}
          style={{ maxWidth: maxWidth }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
