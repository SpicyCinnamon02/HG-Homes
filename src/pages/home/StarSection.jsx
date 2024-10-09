import React from 'react'
import Container from '../../elements/Container'
import stars1 from '../../assets/home-page/star-section/angies-list-removebg-preview.png'
import stars2 from '../../assets/home-page/star-section/bbb.png'
import stars3 from '../../assets/home-page/star-section/google-removebg-preview.png'
import stars4 from '../../assets/home-page/star-section/home-advisor-removebg-preview.png'

const StarSection = () => {
    return (
        <Container className=' flex justify-center items-center py-3 bg-green-lightest'>
            <div className='flex justify-center gap-5 lg:gap-0 lg:justify-between items-center w-[80%]'>
                <img src={stars1} alt="reviews" className='h-[30px] lg:h-[50px]' />
                <img src={stars2} alt="reviews" className='h-[30px] lg:h-[50px]' />
                <img src={stars3} alt="reviews" className='h-[30px] lg:h-[50px]' />
                <img src={stars4} alt="reviews" className='h-[30px] lg:h-[50px]' />
            </div>
        </Container>
    )
}

export default StarSection