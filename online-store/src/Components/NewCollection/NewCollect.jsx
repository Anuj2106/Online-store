import React from 'react'
import latestCollection from '../../api/latestcollect'
import Container from 'react-bootstrap/esm/Container'
import Item from '../Item/Item'
const NewCollect = () => {
  return (
   <>
<section className="popular">
      <Container fluid className='mt-5'>
      <div className="row">
        <div className="col-12">
          <h1 className='text-center text-decoration-underline '>Latest Collection 
          </h1>
        </div>
      </div>
      <div className="row">
       
        {
          latestCollection.map((item)=>{
             return <Item key={1} id={item.id} name={item.name } image={item.image} newPrize={item.newPrice} oldPrize={item.oldPrice} description={item.description}/>
          })
        }
      
      </div>

      </Container>
    </section>
   </>
  )
}

export default NewCollect