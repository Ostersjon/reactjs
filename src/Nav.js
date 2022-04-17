import React from 'react'
// import { FaSearch } from "react-icons/fa";
function nav() {
  return (
    <div className='Nav'>

      <div className='lft'>
      <div className='down'>تابعنا +</div>
      <ul className='ooo'>
        <li>فيسبوك</li>
        <li>تويتر</li>
        <li>لينكدان</li>
        <li>يوتيوب</li>
        <li>انستجرام</li>
      </ul>
      </div>


      <div className='cntr'>
      <div>الرئيسية</div>
      <div>مقالات</div>
      <div>مراجعات</div>
      <div>أخبار</div>
      <div>هاردوير</div>
      <div>هواتف</div>
      <div>الرياضه الالكترونيه</div>
      </div>


      <div className='rt'>
      <img id='logo' src={require('./3.png')} alt='logo' />
      </div>





    </div>
  )
}

export default nav