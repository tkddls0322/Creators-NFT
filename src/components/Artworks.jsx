import React, { Component }  from 'react';
import klaylogo from '../assets/klaylogo.png'
import { useGlobalState } from '../store'
// import { BASE_URI } from '../Adulam'
const BASE_URI='https://ipfs.io/ipfs/QmdqR7W6GGeWtsbD1jZFSmpjAtMS1fE1L6rGvbbBJoa2SA/'
const Artworks = () => {
  // const [nfts] = useGlobalState('nfts')

  const trucncate = (str, num = 20) => {
    if (str.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str
    }
  }
  // let nfts = [
  //   // {id:'1.png'}
  // ]
  let nfts = new Array(10).fill(0).map((o, i)=>({id:(i+1)+'.png'}));

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className={`flex relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-52 h-52 object-contain
                bg-[url("${BASE_URI + nft.id})]
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]`}
              style={{backgroundImage: `url(${BASE_URI + nft.id})`}}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>
                  {/* {nft.id}# {trucncate(nft.title)} */}
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={klaylogo}
                    alt="k Logo"
                  />
                  {nft.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center mx-auto mt-4">
          <button
            className="shadow-xl shadow-black text-black
            bg-[#ffcc00] hover:bg-[#ffbb00] p-2
            rounded-full cursor-pointer my-4"
          >
            더 보기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Artworks
