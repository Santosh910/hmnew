import React from 'react'

const Menucard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
        {

          menuData.map((curElem) =>{
            return(
                <div className="card-container" key={curElem.id}>
                <div className="card">
                    <div className="card-body">
                        <span className='car-number card-circle subtle'>1</span>
                        <span className='card-author subtle'>Breakfast</span>
                        <h2 className='card-title'> Maggie </h2>
                        <span className="card-description subtle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis nostrum in temporibus non deleniti nulla. Necessitatibus obcaecati, earum eligendi fugit possimus mollitia sequi culpa ut veritatis excepturi repellendus corrupti.
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    {/* <img src={image} alt="images" className='card-media' /> */}
                    <span className='card-tag subtle'>Order Now</span>
                </div>
             </div>
            )
          })
        }
      </section>
    </>
  )
}

export default Menucard