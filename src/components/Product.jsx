import './Product.css'

function Product(props)
{
return(
     <>
        <div class="Product">
        <h2>{props.name}</h2>
        <img className="image" src= {props.image}/>
        <h4>Description: {props.Description}</h4>
        <hr/>
        <div className='price'>
        <h3>Price: {props.Price}</h3>
        </div>
        </div>




</>


)


}
export default Product