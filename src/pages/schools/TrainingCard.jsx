import React from "react";
import styles from "./OfflineDesktop.module.scss";

const TrainingCard = ({
  title,
  className,
  titleClassName,
  dividerClassName,
  detailsClassName,
  details,
}) => {
  return (
    <article className={className}>
      <h3
        className={titleClassName}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <hr className={dividerClassName} />
      <div className={detailsClassName}>
        {details.map((detail, index) => (
          <div key={index} className={detail.className}>
            {detail.text}
          </div>
        ))}
      </div>
    </article>
  );
};

export default TrainingCard;
