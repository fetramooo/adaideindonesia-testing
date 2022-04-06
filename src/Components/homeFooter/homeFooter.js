import './homeFooter.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const homeFooter = () => {
    return (
        <div className="footer">
            <img src="Img/logo-adaide-dark2.png" />
            <div className="titleFooter">
              Ada Ide Indonesia
            </div>
            <div className="captionFooter">
              Jl. Setra Dago Barat No. 25 Antapani Kulon, Kec. Antapani Kota Bandung, Jawa Barat 40291
            </div>
            <div className="comFooter">
              <Container>
                <Row>
                  <Col sm={4} className="blockFooter">
                    <div className="titlevFooter">
                      Program
                    </div>
                    <a href="">
                      <div className="valueFooter">Semua Program</div>
                    </a>
                    <a href="">
                      <div className="valueFooter">Berita Terbaru</div>
                    </a>
                  </Col>
                  <Col sm={4} className="blockFooter">
                    <div className="titlevFooter">
                      Hubungi Kami
                    </div>
                    <a href="">
                      <div className="valueFooter">Pesan Whatsapp</div>
                    </a>
                    <a href="">
                      <div className="valueFooter">Pusat Bantuan</div>
                    </a>
                  </Col>
                  <Col sm={4}className="blockFooter">
                    <div className="titlevFooter">
                      Perusahaan
                    </div>
                    <a href="">
                      <div className="valueFooter">Tentang Kami</div>
                    </a>
                    <a href="">
                      <div className="valueFooter">Program Kami</div>
                    </a>
                    <a href="">
                      <div className="valueFooter">Blog</div>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
            <a href=""><img className="socFooter" src="Img/Social.png" /></a>
        </div>
    )
}

export default homeFooter