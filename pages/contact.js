import React from 'react';
import Wrapper from "@/components/Wrapper";
import Link from 'next/link';
import {
    FaInstagram,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Contact() {
    return (
        <div className='min-h-[400px] flex items-center'>
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col leading-10 font-medium">
                    <div>
                        Project made by - Akshay Himatsingka
                    </div>
                    <div>
                        Contribute to this project here - <span className='underline'><Link href="https://github.com/akshayhim/ShoeHaul-frontend" target='_blank'>Github Repo</Link></span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">Contact me:</span>
                        <span className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                                <Link href="mailto:akshayhimat@gmail.com" target='-blank'>
                                    <BiLogoGmail size={20} />
                                </Link>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                                <Link href="https://github.com/akshayhim" target='-blank'>
                                    <AiFillGithub size={20} />
                                </Link>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                                <Link href="https://www.linkedin.com/in/akshay-himatsingka/" target='-blank'>
                                    <AiFillLinkedin size={20} />
                                </Link>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                                <Link href="https://www.instagram.com/_akshay.h/" target='-blank'>
                                    <FaInstagram size={20} />
                                </Link>
                            </div>
                        </span>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

