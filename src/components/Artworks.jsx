import React, { Component }  from 'react';
import klaylogo from '../assets/klaylogo.png'
import { useGlobalState } from '../store'
// import { BASE_URI } from '../Adulam'
const BASE_URI=''
const Artworks = () => {
  const [nfts] = useGlobalState('nfts')

  const trucncate = (str, num = 20) => {
    if (str.length > num) {
      return str.slice(0, num) + "..."
    } else {
      return str
    }
  }
  // const nfts = [
  //   {id:'data:image/png;base64,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',
  //   },{id:'https://i.pinimg.com/736x/ba/35/ee/ba35ee603c48d374c2c788e978e0c32b.jpg'},{id:'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjBJyu%2Fbtq5CAa6IEt%2F629VcggZMk3isIGeOFrb00%2Fimg.jpg'}
  // ]

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap justify-start items-center mt-4">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className={`relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain
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
                    alt="Adulam Logo"
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
