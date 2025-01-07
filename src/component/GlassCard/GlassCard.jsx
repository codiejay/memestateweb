const GlassCard = ({ maxWidth, image, content }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full    ">
      <div className="-mb-10 z-50">
        <img src={`/images/${image}`} alt="road1" className="h-[107px]" />
      </div>

      <div>
        <div
          className={`roadMapCard h-full min-h-[524px]  lg:px-0 px-5  lg:py-0 py-8 glassCardContent`}
          style={{ maxWidth: maxWidth }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
