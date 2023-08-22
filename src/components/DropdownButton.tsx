import React, { useState } from 'react';

export const DropdownButton = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{
        setOpen((open) => !open);
    };
    return (
        <div className='flex-col px-2'>
            <button className="group"onClick={handleOpen}>
                新手上路
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFD934]"></span>
            </button>
            {open ?         
                <ul className="absolute menu bg-gray-50 rounded-md p-2">
                    <li className="menu-item p-1">
                        <button>特點介紹</button>
                    </li>
                    <li className="menu-item p-1">
                        <button>使用者指南</button>
                    </li>
                    <li className="menu-item p-1">
                        <button>聚會主題推薦</button>
                    </li>
                    <li className="menu-item p-1">
                        <button>節日特輯企劃</button>
                    </li>

                </ul> 
            : null}
        </div>
    )
}

