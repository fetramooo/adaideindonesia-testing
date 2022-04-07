import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import ProgramAvailable from '../Components/programAvailable/programAvailable.js'
import HomeFooter from '../Components/homeFooter/homeFooter.js'
import Copywrite from '../Components/copyWriter/copywrite.js'
import NavBar from '../Components/navBar/navBar.js'
<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>

const Home = () => {
    return (
      <div>
        <div className="app">
          <div className="page">
            <div className="header">
                <div><img className="baner" src="Img/headerslider.png" /></div>
            </div>
            <div classname="succesStory">
              <div>
                <p>Berkat Bantuan Anda</p>
              </div>
              <div className="content-slider">
                  <div className="content-slider-item"><img src="Img/Frame390.png" /></div>
                  <div className="content-slider-item"><img src="Img/Frame390.png" /></div>
                  <div className="content-slider-item"><img src="Img/Frame390.png" /></div>
                  <div className="content-slider-item"><img src="Img/Frame390.png" /></div>
                  <div className="content-slider-item"><img src="Img/Frame390.png" /></div>
              </div>
            </div>
            <div className="programList">
              <div className="bantuan">
                <p>Bantuan Sesama Sekarang</p>
              </div>
              <div>
                <ProgramAvailable />
                <ProgramAvailable />
                <ProgramAvailable />
                <ProgramAvailable
                    title=""
                    type=""
                    progress=""
                    dana=""
                    sisaHari=""
                />
                <div className="">
                  <a href="" className="more">
                    Muat Lebih Banyak
                  </a>
                </div>
              </div>
            </div>
            <div className="newsLetter">
              <p>Kenali kami lebih jauh</p>
              <div className="captionNL">
                Dapatkan informasi menarik seputar pedalaman langsung dikirim ke inbox Anda hari ini.
              </div>
              <div className="formNL">
                <Form.Control className="formNLdetail" type="text" placeholder="Nama Lengkap" />
                <br/>
                <Form.Control className="formNLdetail" type="text" placeholder="Email" />
              </div>
              <a href=""><img className="btnNL" src="Img/buttonNL.png" /></a>
            </div>
            <HomeFooter />
            <a href=""><img className="btn-green" src="Img/hubungi-kami.png" /></a>
            <Copywrite />
            <NavBar />
          </div>
        </div>
      </div>
    )
  }
  
  export default Home;