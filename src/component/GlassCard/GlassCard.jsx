const GlassCard = ({ maxWidth, image, content }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full    ">
      <div className="-mb-10 z-50">
        <img
          src={`/images/${image}`}
          alt="road1"
          className="lg:h-[107px]  lg:min-h-['unset'] min-h-full h-full "
        />
      </div>

      <div>
        <div
          className={`roadMapCard lg:h-[540px]  lg:min-h-['unset] min-h-[540px] lg:px-0 px-5  lg:py-0 py-8 glassCardContent`}
          style={{ maxWidth: maxWidth }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
