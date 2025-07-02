import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed by <a className='footer_faizan' target='_faizan' href='https://github.com/tanishkdagar20/Portfolio-new.git'>Tanishk Dagar</a></p>
        </div>
    </>
  )
}

export default Footer