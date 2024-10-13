const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-between items-center bg-purple-600 text-white py-2 sticky top-0'>
                <li  className="font-bold text-2xl mx-10 cursor-pointer rounded-full px-4 py-2 hover:bg-purple-700 transition-all max-sm:mx-0">iTask</li>
                <div className="flex gap-5 mx-10 max-sm:mx-0 max-sm:gap-1">
                    <li className="rounded-full px-4 py-2 hover:bg-purple-700 transition-all cursor-pointer">About</li>
                    <li className="rounded-full px-4 py-2 hover:bg-purple-700 transition-all cursor-pointer">Contact Us</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
