function LayoutSkeleton({
  height = "auto",
  width = "auto",
  classArr = [],
  imageSrc = "",
}) {
  return (
    <div className={classArr.join(" ")} style={{ height, width }}>
      <img className="fix-image" src={imageSrc} alt="skeleton image" />
    </div>
  );
}
export default LayoutSkeleton;
