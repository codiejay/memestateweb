const GlassCard = ({ maxWidth, image, content }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div>
        <img src={`/images/${image}`} alt="road1" className="h-[171px]" />
      </div>

      <div>
        <div
          className={`roadMapCard h-[510px] `}
          style={{ maxWidth: maxWidth }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
