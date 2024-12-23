import LayoutSkeleton from "../LayoutSkeleton";
import styles from "./LayoutTwo.module.css";

function LayoutTwo() {
  let isSmall = window.matchMedia("(max-width: 787px)");
  return (
    <div className={`${styles.container}`}>
      <LayoutSkeleton
        classArr={[styles["container_image_formatter"]]}
        width={isSmall.matches ? "100%" : "60%"}
        imageSrc="/layout3_images/cat1.jpg"
      />
      <div className={styles.container_two}>
        <LayoutSkeleton
          classArr={[styles["container_image_formatter"]]}
          height="100%"
          width="100%"
          imageSrc="/layout3_images/cat2.jpg"
        />

        <div className={styles.container_three}>
          <LayoutSkeleton
            classArr={[styles["container_image_formatter"]]}
            height="100%"
            width="100%"
            imageSrc="/layout3_images/cat3.webp"
          />
          <LayoutSkeleton
            classArr={[styles["container_image_formatter"]]}
            height="100%"
            width="100%"
            imageSrc="/layout3_images/cat4.jpg"
          />
        </div>
        <LayoutSkeleton
          classArr={[styles["container_image_formatter"]]}
          height="100%"
          width="100%"
          imageSrc="/layout3_images/cat5.jpg"
        />
      </div>
    </div>
  );
}

export default LayoutTwo;
