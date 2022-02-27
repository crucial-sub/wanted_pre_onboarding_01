import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles.input} || ${props.className}`}
      type={props.type}
      ref={props.refValue}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
      value={props.value}
    >
      {props.children}
    </input>
  );
};

export default Input;
