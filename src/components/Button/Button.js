/* 
  variant: "default" | "outlined" | "text"
  size: lg | md | xs
  label: for text
  iconLeft: true | false
  iconRight: true | false
  

*/
import styles from "./style.module.css";
import clsx from "clsx";

export const Button = ({
  variant,
  iconName,
  iconLeft,
  iconRight,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={clsx(styles.default, { [styles.secondary]: variant })}
      disabled={disabled}
    >
      <span
        className={clsx(styles.hide, {
          [styles.display]: iconName && iconLeft,
        })}
      >
        <i class={`bi ${iconName}`}></i>
      </span>
      <span
        className={clsx(styles.hide, {
          [styles.display]: children,
        })}
      >
        {children}
      </span>
      <span
        className={clsx(styles.hide, {
          [styles.display]: iconName && iconRight,
        })}
      >
        <i class={iconName}></i>
      </span>
    </button>
  );
};
