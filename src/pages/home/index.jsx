import React from 'react'
import bf from '../../assets/icons/breakfast_icon.svg'
import Lunch from '../../assets/icons/lunch_Icon.svg'
import dinner from '../../assets/icons/Dinner_Icon.svg'
import desert from '../../assets/icons/Dissert_Icon.svg'
import qb from '../../assets/icons/quickbite_Icon.svg'
import recipe1 from '../../assets/images/recipe1.png'
import recipe2 from '../../assets/images/recipe 2.png'



const HomePage = () => {
  return (
    
       <div className='main_div'>
        <section className="hero">
          <div className="hero_overlay" />
          <div className="hero_content">
            <h1 className="hero_title">UNLEASH CULINARY<br />EXCELLENCE</h1>
            <p className="hero_subtitle">
              Explore a world of flavors, discover handcrafted recipes,<br />
              and let the aroma of our passion for cooking fill your kitchen
            </p>
            <button className="hero_btn">EXPLORE RECIPES</button>
          </div>
        </section>
        {/*--our palette--*/}
        <div className="our_palette_section">
          <div className="left_bar">
            <div className="our_platte_text">
              <button>Explore</button>
              <h2>OUR DIVERSE <br />PALETTE</h2>
              <p>If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for
                irresistible desserts, our curated selection has something to satisfy every palate.</p>
              <div className="our_palatte_button">
                <button className="see_more_btn">see more</button>
              </div>
            </div>
          </div>
          <div className="right_bar">
            <div className="our_menu_slide">
              <img src={bf} alt="" />
              <h2>BREAKFAST</h2>
            </div>
            <div className="our_menu_slide">
              <img src={Lunch} alt="" />
              <h2>LUNCH</h2>
            </div>
            <div className="our_menu_slide">
              <img src={dinner} alt="" />
              <h2>DINNER</h2>
            </div>
            <div className="our_menu_slide">
              <img src={desert} alt="" />
              <h2>DESSERT</h2>
            </div>
            <div className="our_menu_slide">
              <img src={qb} alt="" />
              <h2>Quick Bite</h2>
            </div>
          </div>
        </div>
        <div className="our_featured">
          <h2>Featured Recipes</h2>
          <div className="feaured_grid">
            <div className="recipe_card">
              <div className="img">
                <img src={recipe1} alt="" />
              </div>
              <div className="content_section">
                <h2>Savory Herb-Infused Chicken</h2>
                <p>Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                <div className="footer_section">
                  <div className="time">40 Min - easy prep - 3 serves</div>
                  <button className="view_recipe_button">View Recipes</button>
                </div>  
              </div>
            </div>
            <div className="recipe_card">
              <div className="img">
                <img src={recipe2} alt="" />
                <img src="/assets/icons/veg_tag.svg" className="veg_recipe" alt="" />
              </div>
              <div className="content_section">
                <h2>Decadent Chocolate Mousse</h2>
                <p>Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!</p>
                <div className="footer_section">
                  <div className="time">30 Min - medium prep- 4 serves</div>
                  <button className="view_recipe_button">View Recipes</button>
                </div>  
              </div>
            </div>
          </div>
        </div>
        {/*-CTA*/}
        <div className="cta_section">
          <div className="cta_inner">
            <span>Subscribe Now</span>
            <h2>Join the fun <br /> SUBSCRIBE NOW! </h2>
            <p>Subscribe to our newsletter for a weekly serving of
              recipes, cooking tips, and exclusive insights straight
              to your inbox.</p>
            <div className="input_btn">
              <input type="text" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
    
  )
}

export default HomePage
