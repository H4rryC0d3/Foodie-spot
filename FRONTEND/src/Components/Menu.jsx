import React from 'react'
import {data} from '../pages/restApi.json';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora ullam illum,
                     minima, inventore nesciunt dolor totam corporis perspiciatis rem in amet repellendus qui 
                     neque sit rerum harum commodi dolorem.
                 </p>
            </div>
            <div className="dishes_container">
                {data[0].dishes.map((element) => {
                    return (
                        <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h3>{element.title}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
      
    </section>
  )
}

export default Menu
