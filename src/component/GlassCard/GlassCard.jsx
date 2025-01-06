const GlassCard = ({ maxWidth, image, content }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16  ">
      <div>
        <img src={`/images/${image}`} alt="road1" className="h-[171px]" />
      </div>

      <div>
        <div
          className={`roadMapCard lg:h-[510px] h-full lg:px-0 px-5  lg:py-0 py-4`}
          style={{ maxWidth: maxWidth }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
