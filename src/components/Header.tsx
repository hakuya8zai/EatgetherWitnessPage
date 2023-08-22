'use client'
 
import {DropdownButton} from "../components/DropdownButton"

export function Header() {
  return (
    <header className="flex flex-row justify-between bg-white p-4 h-16 sticky top-0 shadow-md">
      <div className="flex flex-row logo basis-3/4">
        <a className="grow-0 shrink-0" href="#" rel="noreferrer">
          <img className="h-full" src="https://eatgether.com/static/media/logo.62c95b56.svg" alt="" />
        </a>
        <div className="navs flex flex-row mt-1 hidden md:flex">
          <div className='ps-4 pe-2'>
              <button className="group">
                  聚會活動
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFD934]"></span>
              </button>
          </div>
          <div className='px-2'>
              <button className="group">
                  貼文
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFD934]"></span>
              </button>
          </div>
          <DropdownButton ></DropdownButton>
          <div className='px-2'>
              <button className="group">
                  交友見證
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFD934]"></span>
              </button>
          </div>
        </div>


      </div>
      <div className="flex flex-row justify-end basis-1/4">
        <div className="language mx-2 my-1 shrink-0">
          <img className="w-full" src="https://eatgether.com/static/media/language.a24c8aeb.svg" alt="" />
        </div>
        <div className="flex bg-[#FFD934] items-center px-1 rounded-full">
          <p className="shrink-0 text-base px-4 font-normal text-[#3B3B3A] hidden md:flex">註冊 / 登入</p>
          <a className="justify-self-end	 shrink-0 h-full py-1 " href="#">
            <img className="w-full h-full rounded-full" src="https://eatgether.com/static/media/avatar.3fa5ea22.svg" alt="" />
          </a>
        </div>
      </div>
    </header>

  )
}

