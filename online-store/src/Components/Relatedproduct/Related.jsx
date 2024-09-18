import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import data_product from '../../api/data_porduct'
import Item from '../Item/Item'
const Popular = () => {
  return (
   <>
    <section className="popular">
      <Container fluid className='mt-5'>
      <div className="row">
        <div className="col-12">
          <h1 className='text-center text-decoration-underline '>Related Products
          </h1>
        </div>
      </div>
      <div className="row">
       
        {
          data_product.map((item)=>{
             return <Item key={1} id={item.id} name={item.name } image={item.image} newPrize={item.newPrice} oldPrize={item.oldPrice} description={item.description}/>
          })
        }
      
      </div>

      </Container>
    </section>
   </>
  )
}

export default Popular