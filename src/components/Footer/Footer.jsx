import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-[100px] px-6 md:px-16 lg:px-[160px] py-8 md:py-16 lg:py-[100px] flex justify-center items-center flex-col'>
            <h1 className='font-bold text-xl md:text-2xl lg:text-[32px] mb-3'>Gadget Heaven</h1>
            <p className='text-[#09080F99] text-center text-sm md:text-base'>Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider my-8"></div>
            <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[166px] w-full justify-center items-center'>
                <div className='text-center'>
                    <h3 className='font-bold text-base md:text-lg lg:text-[18px] mb-4'>Services</h3>
                    <div className='text-[#09080F99] text-sm md:text-base'>
                        <p>Product Support</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns</p>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-base md:text-lg lg:text-[18px] mb-4'>Company</h3>
                    <div className='text-[#09080F99] text-sm md:text-base'>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-base md:text-lg lg:text-[18px] mb-4'>Legal</h3>
                    <div className='text-[#09080F99] text-sm md:text-base'>
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