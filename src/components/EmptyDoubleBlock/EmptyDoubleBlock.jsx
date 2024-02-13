import "./EmptyDoubleBlock.scss";

function EmptyDoubleBlock({
  firstComponent,
  secondComponent,
  size,
  firstBlockSize,
  secondBlockSize,
}) {
  return (
    <section className={`empty-double-block ${size}`}>
      <div className={`empty-double-block__container ${firstBlockSize} ${size}`}>
        {firstComponent()}
      </div>
      <div className={`empty-double-block__container ${secondBlockSize} ${size}`}>
        {secondComponent()}
      </div>
    </section>
  );
}
export default EmptyDoubleBlock;
