import React from 'react'

function Footer() {
  return(
    <footer className="bg-gray-900 text-white px-16 py-10">
    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
    <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Company</h3>
        <a href='#' className="text-gray-300 hover:text-orange-500">About us</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Career</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Swiggy one</a>
    </div>

    <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Help</h3>
        <a href='#' className="text-gray-300 hover:text-orange-500">About us</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Career</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Swiggy one</a>
    </div>

     <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Legal</h3>
        <a href='#' className="text-gray-300 hover:text-orange-500">Terms</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Privacy</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Cookies</a>
    </div>

    <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Social Links</h3>
        <a href='#' className="text-gray-300 hover:text-orange-500">Instagram</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Youtube</a>
        <a href='#' className="text-gray-300 hover:text-orange-500">Twitter</a>
    </div>
    </div>
    

    </footer>
  )
}

export default Footer;
