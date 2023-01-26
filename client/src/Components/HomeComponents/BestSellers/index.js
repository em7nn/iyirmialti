import React from 'react'
import "./index.scss"
function BestSellers() {
  return (
    <>

      <div className='bestsellers_main'>
        <div className='bestsellers'>
          <div className='bestsellers_yazi'>
            <div className='pe'>
              <p>Popular Item in the market</p>
            </div>
            <div className='ikihas'>
              <h2>Best</h2>
              <h2 id='pro'>Sellers</h2>
            </div>

          </div>
          <div className='products'>
            <div className='card' >
              <img src='https://preview.colorlib.com/theme/aroma/img/product/product1.png' alt="product" />
              <p>Accessories</p>
              <h3>Quartz Belt Watch</h3>
              <h5>$150.00</h5>
            </div>
            <div className='card' >
              <img src='https://preview.colorlib.com/theme/aroma/img/product/product2.png' alt="product" />
              <p>Beauty</p>
              <h3>Women Freshwash</h3>
              <h5>$150.00</h5>
            </div>
            <div className='card' >
              <img src='https://preview.colorlib.com/theme/aroma/img/product/product3.png' alt="product" />
              <p>Decor</p>
              <h3>Room Flash Light</h3>
              <h5>$150.00</h5>
            </div>
            <div className='card' >
              <img src='https://preview.colorlib.com/theme/aroma/img/product/product4.png' alt="product" />
              <p>Decor</p>
              <h3>Room Flash Light</h3>
              <h5>$150.00</h5>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BestSellers