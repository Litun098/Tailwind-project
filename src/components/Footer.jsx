import React from 'react'
import {
 FaFacebook,
 FaTwitter,
 FaInstagram,
 FaTwitch,
 FaGithub,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name="footer" className='w-full mt-24 bg-slate-900 text-gray-300 py-6 px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Supporter</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col lg:flex-row'>
                    <input className='rounded mr-4 p-2' type="email"/>
                    <button className='p-2 mr-4'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex justify-between mx-14 my-1'>
            <p >2022 Workflow, LLC All rights reserved</p>
            <div className='flex text-2xl'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
        </div>
    </div>
  )
}

export default Footer
