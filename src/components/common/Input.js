

export default function Input(props) {
  return (
    <>
      <input placeholder={props.placeholder} type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
    </>
  );
}