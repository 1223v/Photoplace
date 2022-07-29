import React from 'react'
import { Col } from 'antd';


function GridCards(props) {

 
  return (
      <Col lg={6} md={8} xs={24} >
        <div style={{ position: 'relative'}}>
            <a href={`/Detail/${props.num}`}>
                <img style= {{width: '100%', height: '320px'}} src= {props.image} alt={props.title}/>
            </a>
        </div>
      
      </Col>
    
  )


}
export default GridCards