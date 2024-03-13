const Title = ({ title, isRectangle, fontSize }) => {
  return (
    <div
      className={`px-3 z-50 text-sm tracking-wider ${fontSize} ${
        isRectangle
          ? "basis-1/2 text-black self-end"
          : "text-white absolute bottom-1 pb-3"
      }`}
    >
      {title}
    </div>
  );
};

export default Title;
