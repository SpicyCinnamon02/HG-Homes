import React from 'react';
import Container from '../elements/Container';
import Separator from '../elements/ui/Separator';
import { FaFacebookF, FaPhone } from "react-icons/fa6";
import MobileNavbar from './MobileNavbar';

export const navLinks = [
    {
        name: 'Promotion',
        path: '/promotion'
    },
    {
        name: 'House Plans',
        path: '/house-plan'
    },
    {
        name: 'Where We Build',
        path: '/build'
    },
    {
        name: 'Financing',
        path: '/financing'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Home Improvements',
        path: '/'
    },
    {
        name: 'Home Services',
        path: '/'
    }
];

const topNavLinks = [
    {
        name: "Facebook Page",
        icon: <FaFacebookF className='text-white text-[20px]' />,
        path: "https://www.facebook.com/GreenHomeImprovementsPlus/",
    },
    {
        name: "561-815-0008",
        icon: <FaPhone className='text-white text-[20px]' />,
        path: "tel:561-815-0008",
    }
]

const Navbar = () => {
    return (
        <Container className='absolute z-40 w-full  pt-[10px] lg:pt-[30px] pb-4 shadow-lg flex justify-between lg:items-between lg:justify-center lg:flex-col bg-opacity-20 backdrop-blur-sm'>
            <div className="md:flex hidden justify-end items-center w-full">
                <div className="flex justify-center items-end">
                    {topNavLinks.map((link, i) => (
                        <div className='flex justify-center items-center'>
                            {link.icon}
                            <a
                                target='blank'
                                href={link.path}
                                className="hover:underline px-3 py-2 text-[15px] font-semibold uppercase text-white"
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-baseline flex-wrap'>
                <div className='flex-start'>
                    <h1 className='text-[30px] md:text-[40px] font-extrabold tracking-tighter text-green-light'>
                        HG Homes
                    </h1>
                </div>
                <div className="md:flex hidden justify-center items-center">
                    {navLinks.map((link, i) => (
                        <div className='flex justify-center items-center tracking-wide'>
                            <a
                                href={link.path}
                                className="hover:underline px-3 py-2 text-[15px] font-semibold uppercase text-white"
                            >
                                {link.name}
                            </a>
                            {navLinks.length - 1 !== i && (
                                <Separator orientation="vertical"
                                    className="h-6 w-[2px] bg-gray-300" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <MobileNavbar />
        </Container>
    );
};

export default Navbar;
