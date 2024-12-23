import FormSkeleton from "../FormSkeleton";
import LayoutSkeleton from "../LayoutSkeleton";
import styles from "./LayoutOne.module.css";

function LayoutOne() {
  let isSmall = window.matchMedia("(max-width: 787px)");
  return (
    <div className={`${styles.container}`}>
      <LayoutSkeleton
        classArr={[styles["container_image_formatter"]]}
        width={isSmall.matches ? "100%" : "60%"}
        imageSrc="/layout2_images/weapon1.jpg"
      />
      <div className={styles.container_two}>
        <LayoutSkeleton
          classArr={[styles["container_image_formatter"]]}
          height="100%"
          width="100%"
          imageSrc="/layout2_images/weapon2.jpeg"
        />
        <div className={styles.container_three}>
          <LayoutSkeleton
            classArr={[styles["container_image_formatter"]]}
            height="100%"
            width="100%"
            imageSrc="/layout2_images/weapon3.jpg"
          />
          <LayoutSkeleton
            classArr={[styles["container_image_formatter"]]}
            height="100%"
            width="100%"
            imageSrc="/layout2_images/weapon4.webp"
          />
        </div>
        <FormSkeleton
          classArr={[styles["container_image_formatter"]]}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
}

export default LayoutOne;
