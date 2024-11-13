import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
     <footer>
        <Container>
            <Row>
              <Col className="text-center py-3">
                 <p> &Copy; {currentYear}</p>
              </Col>
            </Row>
        </Container>
     </footer>
  )
}

export default Footer
