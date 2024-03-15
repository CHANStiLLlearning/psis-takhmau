import React from 'react'
import '../home.css'
const Footer = (props) => {
  return (
    <div className='footer max-w-[1920px] ' data-aos = "fade-in">
      <div className='foot-box' style={props?.border && {borderRightL:"1px solid #fff"}}>
        <h3>Address</h3>
        <p style={{marginBottom:"30px"}}>Address: No. 42 St 432, Toul Tumpoung I,Khan Chamkamorn, Phnom Penh, Kingdom of Cambodia.</p>
        <p className='block-f'>
        <span><a href='https://www.facebook.com/PUC.OfficialPage'>Facebook</a></span>
          <span> <a href='https://www.youtube.com/@PUCOfficialTube'>Youtube</a></span>
          <span> <a href='https://t.me/PUCtelegram'> Telegram</a></span>
          
        </p>
        <p style={{ marginTop: "30px" }} className='block-f'>PUC @ 2024 All Rights Reserved</p>
      </div>
      <div className='foot-box border-left'>
        <h3>Scholarship Announcements</h3>
        <p className='hov'>2019 Asia Pacific Leadership Program (APLP)</p>
        <p className='hov'>Master Programme in International Human Rights Law 2018-2020</p>
        <p className='hov'>Full-Covered Scholarship for Master Degrees at Zheng Zhou University, China</p>
      </div>
      <div className='foot-box border-left'>
        <h3>Contact Us</h3>
        <p className='hov'>No. 10 E0, Alley Preah Norodom Blvd, Tonle BassacKhan Chamkamorn, Phnom Penh</p>
        <p className='hov'>Toul Tumpoung Campus</p>
       {/* <p className='hov'>Address: No. 42 St 432, Toul Tumpoung I,Khan Chamkamorn, Phnom Penh, Kingdom of Cambodia.</p> */}
        <p className='hov'>Email: info@puc.edu.kh   </p>
        <p style={{ marginBottom: "30px" }} className='hov'>Tel: 023 990 153, 087 866 363 and 099 866 363.</p>
        <p className='none-f'>
          <span><a href='https://www.facebook.com/PUC.OfficialPage'>Facebook</a></span>
          <span> <a href='https://www.youtube.com/@PUCOfficialTube'>Youtube</a></span>
          <span> <a href='https://t.me/PUCtelegram'> Telegram</a></span>
          {/* <span>Instagram</span> */}
        </p>
        <p style={{ marginTop: "30px" }} className='none-f'>PUC @ 2024 All Rights Reserved</p>
      </div>
      
    </div>
  )
}

export default Footer