export default function ShortTextField(props) {
  return (
    <input {...props} className={"border px-2 appearance-none outline-none focus:border-black py-1 rounded " + props.className}></input>
  )
}