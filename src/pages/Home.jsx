import React from 'react';
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const Home = () => {

    const categories = [
        {name:'Technology',id:1,icon:'https://cdn-icons-png.flaticon.com/512/4257/4257483.png'},
        {name:'Nature',id:2,icon:'https://cdn-icons-png.flaticon.com/512/2823/2823511.png'},
        {name:'Politics',id:3,icon:'https://static.thenounproject.com/png/955295-200.png'},
        {name:'Sports',id:4,icon:'https://cdn-icons-png.flaticon.com/512/857/857492.png'},
    ];

    return (
        <Card>
        <CardHeader>
            <CardTitle>Select Category to Play</CardTitle>
        </CardHeader>
        <CardContent>
            <div className='w-[400px] grid grid-cols-2 gap-4'>
            
            {categories.map((x,i) => {
                return <Link key={i} to='/quiz' className='flex flex-col border hover:border-gray-200 justify-center rounded p-3 items-center bg-[rgba(255,255,255,0.5)]'>
                <img className='w-[80px]' src={x.icon} alt="" />
                <span className='mt-2'>{x.name}</span>
            </Link>
            })
            }
            </div>
        </CardContent>
        </Card>

    );
}

export default Home;
