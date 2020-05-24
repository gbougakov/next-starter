import Loader from './loader'
export default function Button(props) {
  return (
    <button 
      {...props} 
      className={`px-12 py-2 text-white ${props.isLoading ? 'border-gray-300 bg-white' : props.accents} text-center w-full md:w-auto rounded appearance-none outline-none hover:bg-white hover:text-black focus:bg-white focus:text-black transition-all duration-200 border disabled:border-gray-300 disabled:bg-white disabled:cursor-not-allowed disabled:text-gray-500 ${props.className}`}
      isLoading={undefined}
    >{props.isLoading ? <Loader/> : props.children}</button>
  )
}