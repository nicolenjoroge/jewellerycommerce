import React from 'react'
import Navbar from '../components/Navbar.tsx'

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className='banner-section'>
                <div className='banner-content'>
                    <h1>Jewelry of Precious Craft</h1>
                    <h3>Because every piece carries a precious story</h3>
                </div>
                <div className='banner-img'>
                    <img src={require('./products/topbanner.png')} alt='Banner' />
                </div>
            </section>
            <section className='category-section'>
                <div className='category-title'>
                    <h1>Shop by Category</h1>
                    <button>View All</button>
                </div>
                <div className='category-options'>
                    <div className='earring-category'>
                        <img src={require('./products/earrings.png')} alt='earrings' />
                        <h6>EARRINGS</h6>
                    </div>
                    <div className='necklace-category'>
                        <img src={require('./products/necklace.png')} alt='necklaces' />
                        <h6>NECKLACES</h6>
                    </div>
                    <div className='ring-category'>
                        <img src={require('./products/rings.png')} alt='rings' />
                        <h6>RINGS</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home