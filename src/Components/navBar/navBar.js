import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const navBar = () => {
    return (
        <a href="">
        <div className="classBar">
            <Container>
              <Row xs="auto">
                <Col className="blockBar">
                    <img src="Img/beranda.png" />
                </Col>
                <Col className="blockBar">
                    <img src="Img/program.png" />
                </Col>
                <Col className="blockBar">
                    <img src="Img/berita.png" />
                </Col>
                <Col className="blockBar">
                    <img src="Img/donasi.png" />
                </Col>
                <Col className="blockBar">
                    <img src="Img/profil.png" />
                </Col>
              </Row>
            </Container>
        </div>
        </a>
    )
}


export default navBar