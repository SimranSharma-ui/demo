
import './App.css'
import Product from './components/Product'

function App() {
 

  return (
    <>
    
      <h1>Blockbuster Deals On Computer Accessories | Shop Now</h1>
      <div  className='container'>
      <Product name='FRONTECH 20 Inch HD LED Monitor' image='https://m.media-amazon.com/images/I/81-pe8AZQLL.jpg' Description="20 Inches (50.8 cm) LED panel with 16:9 aspect ratio for an immersive viewing experience. Resolution of 1600x900 pixels for sharp and detailed images." Price="9,799/-"/>
      <Product name='Rpm Euro Gaming Keyboard'  image="https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=90&crop=false" Description="There are no additional number keys, and there is more desktop space for you to move the mouse to meet your needs in the office or at home." Price="6,199/-"/>
      <Product name='Bluetooth Gaming Mouse' image="https://m.media-amazon.com/images/I/61Mk3YqYHpL._AC_UF1000,1000_QL80_.jpg" Description="Wireless Gaming Mouse Bluetooth Mouse RGB Rechargeable 2.4G USB Cordless Computer Mice with 7 Color Backlit." Price="3,796"/>
      <Product name='EVACH Stylus Plastic Pencil for iPad 6' image="https://m.media-amazon.com/images/I/51MNVFb7YhL.jpg" Description="Upgraded 2nd Generation Stylus Pencil for Apple iPad 6th/7th/8th/9th/10th Generation" Price="6,738"/>

      </div>
      
     
    
    </>
  )
}

export default App
