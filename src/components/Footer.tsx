import React from 'react'

export function Footer() {
  return (
    <footer className="bg-[#afac99] flex flex-row justify-center py-10">
      <div className="basis-full md:basis-5/6 lg:basis-5/6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ul>
            <h4 className='text-xl font-bold py-2'>更多</h4>
            <li className='text-base font-normal py-2'><a href="#">註冊會員</a></li>
            <li className='text-base font-normal py-2'><a href="#">升級會員</a></li>
            <li className='text-base font-normal py-2'><a href="#">PRO 認證會員</a></li>
            <li className='text-base font-normal py-2'><a href="#">交友小技巧</a></li>
            <li className='text-base font-normal py-2'><a href="#">聚會主題推薦</a></li>
        </ul>
        <ul>
            <h4 className='text-xl font-bold py-2'>幫助</h4>
            <li className='text-base font-normal py-2'><a href="#">社群守則</a></li>
            <li className='text-base font-normal py-2'><a href="#">使用者指南</a></li>
            <li className='text-base font-normal py-2'><a href="#">常見問題</a></li>
        </ul>
        <ul>
            <h4 className='text-xl font-bold py-2'>關於我們</h4>
            <li className='text-base font-normal py-2'><a href="#">加入我們</a></li>
        </ul>
        <ul>
            <h4 className='text-xl font-bold py-2'>聯繫我們</h4>
            <li className='text-base font-normal py-2'><a href="#">service@eatgether.com</a></li>
            <li className='flex'>
                <a href="">                
                    <img src="https://eatgether.com/static/media/ig.c0d469f2.svg" alt="" />
                </a>
                <a href="">                
                    <img src="https://eatgether.com/static/media/fb.08464da1.svg" alt="" />
                </a>
                <a href="">                
                    <img src="https://eatgether.com/static/media/yt.6c200070.svg" alt="" />
                </a>
                <a href="">                
                    <img src="https://eatgether.com/static/media/android.cafb9a68.svg" alt="" />
                </a>
                <a href="">                
                    <img src="	https://eatgether.com/static/media/ios.ed213bc2.svg" alt="" />
                </a>
            </li>
        </ul>
      </div>
    </footer>
  )
}