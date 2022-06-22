import React, { Component }  from 'react';
import klaylogo from '../assets/klaylogo.png'
import { connectWallet } from '../Adulam'
import { useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={klaylogo} alt="Adulam Logo" />
        <span className="text-white text-2xl ml-2">Kreators</span>
      </div>

      <ul
        className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row 
        justify-between items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      {connectedAccount ? null : (
        <button
          className="shadow-xl shadow-black text-black 
        bg-[#ffcc00] hover:bg-[#ffbb00] md:text-xs p-2
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
