import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { MdDarkMode,MdLightMode } from "react-icons/md";

const Layout = () => {

    const [mode,setMode] = useState('dark');
    const changeMode = () => {
        setMode(mode == 'dark' ? '' : 'dark');
    }
    return (<div className={`${mode} bg-background transition-all ease-linear duration-100`}>
    <div className='h-screen items-center justify-start flex flex-col'>
    <h1 className="text-4xl dark:text-white font-bold mb-8 mt-20">
      QUIZ APP
    </h1>  
    <Outlet />
    <Button className='absolute bottom-5 px-2 py-0' onClick={()=>{changeMode()}}>
        {mode == 'dark' ? <MdLightMode size={20}></MdLightMode> : <MdDarkMode size={20}></MdDarkMode>}
    </Button>
    </div>
    </div>
    );
}

export default Layout;
