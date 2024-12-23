import LayoutSkeleton from "../LayoutSkeleton";
import styles from "./LayoutThree.module.css";

function LayoutThree() {
  let isSmall = window.matchMedia("(max-width: 787px)");
  return (
    <div className={`${styles.container}`}>
      <LayoutSkeleton
        classArr={[styles["container_image_formatter"]]}
        width={isSmall.matches ? "100%" : "60%"}
        imageSrc="/layout_images/fish1.webp"
      />
      <div className={styles.container_two}>
        <LayoutSkeleton
          classArr={[styles["container_image_formatter"]]}
          height="100%"
          width="100%"
          imageSrc="/layout_images/fish3.jpeg"
        />

        <div className={styles.container_three}>
          <LayoutSkeleton
            classArr={[styles["container_image_formatter"]]}
            height="100%"
            width="100%"
            imageSrc="/layout_images/fish4.jpg"
          />
          <LayoutSkeleton
            classArr={[styles["container_image_formatter"]]}
            height="100%"
            width="100%"
            imageSrc="/layout_images/fish5.webp"
          />
        </div>
        <LayoutSkeleton
          classArr={[styles["container_image_formatter"]]}
          height="100%"
          width="100%"
          imageSrc="/layout_images/fish6.jpeg"
        />
      </div>
    </div>
  );
}

export default LayoutThree;
