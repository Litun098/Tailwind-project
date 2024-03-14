import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BackupIcon from '@mui/icons-material/Backup';
import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
    return (
        <div name="hero" className='w-full h-full bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Unique Sequencing & Production</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-2xl'>This is our Tech brand.</p>
                    <button className='py-1 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={bgImg} alt='background_image' />
                </div>

                <div className='abslute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform lg:translate-x-[25%] bg-zinc-200 border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-600'><VerifiedUserIcon className="h-6 text-indigo-600" />App Security</p>
                        <p className='flex px-4 py-2 text-slate-600'><DashboardIcon className="h-6 text-indigo-600" />Dashboard Design</p>
                        <p className='flex px-4 py-2 text-slate-600'><BackupIcon className="h-6 text-indigo-600" />Cloud data</p>
                        <p className='flex px-4 py-2 text-slate-600'><SendIcon className="h-6 text-indigo-600" />API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero


// 40