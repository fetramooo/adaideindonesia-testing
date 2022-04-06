import './programAvailable.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const programAvailable = () => {
    return (
        <div className="vv">
            <Container className="comProgram">
                <Row className="bb">
                    <Col xs={6} className="pict">
                        <img src="Img/program1.png" />
                    </Col>
                    <Col xs={6} className="ket">
                        <div className="tittle">
                            Kurangi Sampah dari Planet Bumi
                        </div>
                        <img src="Img/kategori_umum.png" />
                        <img src="Img/progress.png" />
                        <div className="minitable">
                            <Container>
                                <Row className="slim">
                                    <Col xs={7}>
                                        Terkumpul
                                    </Col>
                                    <Col xs={5}>
                                        Sisa Waktu
                                    </Col>
                                </Row>
                                <Row className="bold">
                                    <Col xs={7}>
                                        Rp.502.397.992
                                    </Col>
                                    <Col xs={5}>
                                        382 hari
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default programAvailable