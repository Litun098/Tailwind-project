import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MemoryIcon from '@mui/icons-material/Memory';
import SupportIcon from '@mui/icons-material/Support';
import supportImg from '../assets/support.jpg'


const Support = () => {
    return (
        <div name="support" className='w-full mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-20'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-8 text-center'>Finding the right team</h3>
                    <p className='py-6 text-2xl text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, amet natus, architecto quia, dolore ullam autem cum corporis consequuntur assumenda dolorum incidunt quam excepturi doloribus nulla impedit iste? Tempora adipisci reprehenderit aperiam saepe nemo!</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <div className='bg-indigo-500 w-14 p-4 rounded-xl mt-[-4rem]'>
                                <LocalPhoneIcon className='text-slate-50' />
                            </div>
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur, id expedita minima distinctio quae facere doloribus unde tempora nesciunt sapiente.</p>
                        </div>
                        <div className='px-8 bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowForwardIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <div className='bg-indigo-500 w-14 p-4 rounded-xl mt-[-4rem]'>
                                <SupportIcon className='text-slate-50' />
                            </div>
                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur, id expedita minima distinctio quae facere doloribus unde tempora nesciunt sapiente.</p>
                        </div>
                        <div className='px-8 bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowForwardIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <div className='bg-indigo-500 w-14 p-4 rounded-xl mt-[-4rem]'>
                                <MemoryIcon className='text-slate-50' />
                            </div>
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur, id expedita minima distinctio quae facere doloribus unde tempora nesciunt sapiente.</p>
                        </div>
                        <div className='px-8 bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowForwardIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Support
