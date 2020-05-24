export default function Layout(props) {
  return (
    <div className="flex justify-center items-center md:p-10 min-h-screen">
      <div {...props} className={"w-full md:w-1/2 lg:w-2/5 md:border border-gray-300 rounded-md " + props.className}>
        {props.children}
      </div>
    </div>
  )
}