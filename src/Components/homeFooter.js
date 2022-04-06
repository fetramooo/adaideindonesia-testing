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
                      <div className="valueFooter">Semua Program</div>
                      <div className="valueFooter">Berita Terbaru</div>
                      
                  </Col>
                  <Col sm={4} className="blockFooter">
                      <div className="titlevFooter">
                          Hubungi Kami
                      </div>
                          <div className="valueFooter">Pesan Whatsapp</div>
                          <div className="valueFooter">Pusat Bantuan</div>
                    
                  </Col>
                  <Col sm={4}className="blockFooter">
                      <div className="titlevFooter">
                          Perusahaan
                      </div>
                          <div className="valueFooter">Tentang Kami</div>
                          <div className="valueFooter">Program Kami</div>
                          <div className="valueFooter">Blog</div>
                    
                  </Col>
                </Row>
              </Container>
            </div>
            <img className="socFooter" src="Img/Social.png" />
        </div>
    )
}

export default homeFooter