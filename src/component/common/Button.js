export default function Button(props) {
  const { onClick } = props;
  return (
    <button
      className={props.className}
      type={props.type}
      disabled={props.disabled}
      {...(onClick ? { onClick } : {})}
    >
      {props.name}
    </button>
  );
}
