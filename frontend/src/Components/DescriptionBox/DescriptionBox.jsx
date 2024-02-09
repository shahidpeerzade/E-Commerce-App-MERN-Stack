import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">DescriptionBox</div>
        <div className="descriptionBox-nav-box fade">Reviews (110)</div>
      </div>
      <div className="descriptionBox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim iusto natus nobis exercitationem placeat quae a nostrum voluptatum optio? Ipsa eligendi obcaecati architecto molestias dicta nihil voluptates id aut?</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat sint illo accusamus, impedit provident laudantium, sequi voluptas eaque animi, necessitatibus voluptatum dignissimos. Dolore possimus earum doloremque et quia quod minima, sunt tempora dignissimos. Dolorum?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
