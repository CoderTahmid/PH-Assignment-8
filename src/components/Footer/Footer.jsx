import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-[100px] px-[160px] py-[100px] flex justify-center items-center flex-col'>
            <h1 className='font-bold text-[32px] mb-3'>Gadget Heaven</h1>
            <p className='text-[#09080F99]'>Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider my-8"></div>
            <div className='flex gap-[166px]'>
                <div className='text-center'>
                    <h3 className='font-bold text-[18px] mb-4'>Services</h3>
                    <div className='text-[#09080F99]'>
                        <p>Product Support</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns</p>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[18px] mb-4'>Company</h3>
                    <div className='text-[#09080F99]'>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[18px] mb-4'>Legal</h3>
                    <div className='text-[#09080F99]'>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;