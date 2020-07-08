import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import CardItem from './Components/cardItem/CardItem';

function App() {


    const [ menu, ubahMenu ] = useState([])
   

    const tarikData = ()=>{
        fetch( 'https://rufumenu.herokuapp.com/Menu-items?_sort=id:ASC', {
            method : 'GET',
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            ubahMenu(data)
            // console.log(data);
         
            
        })
    }

    useEffect(function(){
        
    tarikData()

    }, [])



  return (
    <div className="App">
      <Navbar />
      <div className="container" >
              
                <div className="banner-info-w3layouts text-center">
                    <h3>RUFU MENU</h3>
                    <div className="read-more">
                        <a href="#about" className="read-more scroll">SELANJUT NYA  </a> </div>
                </div>
                <div className="row order-info">
                    <div className="middle mt-3 col-md-6 text-left">
                        <ul className="social mb-4">
                             <li><a href="#"><span className="fa fa-facebook icon_facebook"></span></a></li>
                            <li><a href="#"><span className="fa fa-twitter icon_twitter"></span></a></li>
                            <li><a href="#"><span className="fa fa-google-plus icon_google-plus"></span></a></li>
                            <li><a href="#"><span className="fa fa-linkedin icon_linkedin"></span></a></li>
                            <li><a href="#"><span className="fa fa-dribbble icon_dribbble"></span></a></li>
                        </ul>

                    </div>
                    <div className="middle-right mt-md-3 col-md-6 text-right">
                        <h6><span className="fa fa-phone"></span> RUFU INDONESIA</h6>
                    </div>
                </div>
            </div>
    
       <section className="banner-bottom-wthree py-5" id="about">
        <div className="container py-md-3">
            <div className="row banner-grids">
                <div className="col-md-6 content-left-bottom text-left pr-lg-5">
                    <h4>RUFU INDONESIA</h4>
                    <p className="mt-2 text-left">Integer pulvinar leo id viverra feugiat.<strong className="text-capitalize"> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit.</strong> Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.</p>

                </div>
                <div className="col-md-6 content-right-bottom text-left">
                    <img src="images/logorufu.jpg" alt="news image" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>


<section className="services py-5" id="services">
        <div className="container py-md-5">
            <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle two mb-lg-3 mb-3">MAINS MENU</h3>
            </div>
            <div className="row ab-info mt-lg-4">
             
                {
                    menu.length > 0 ? (menu.map((e, x)=>{

                        return <CardItem name={e.menu_items_nama} price={e.menu_items_price} photo={e.menu_items_photo[0]} key={x}/>
                        
                        
                    })) : (
                        <div className="waiting" style={{
                            width : '100%',
                            height : '100%',
                            display : 'flex',
                            justifyContent : 'center',
                            alignItems : 'center',
                            color : 'white',
                        }}>
                            wait..
                        </div>
                    )

                    
                
                }
           
                {/* <div className="col-lg-3 ab-content">
                    <div className="ab-content-inner">
                        <img src="images/3.jpg" alt="news image" className="img-fluid"/>
                        <div className="ab-info-con">
                            <h4>Two burgers for one</h4>
                            <p>$25.99</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 ab-content">
                    <div className="ab-content-inner">
                        <img src="images/4.jpg" alt="news image" className="img-fluid"/>
                        <div className="ab-info-con">
                            <h4>Veg Muffin</h4>
                            <p>$28.99</p>
                        </div>
                    </div>
                </div>
                 */}
            </div>
        </div>
</section>

<section className="mid-sec py-5" id="menu">
        <div className="container-fluid py-lg-5">
            <div className="header pb-lg-3 pb-3 text-center">
                <h3 className="tittle mb-lg-3 mb-3">snack  &  Drink</h3>
            </div>
            <div className="middile-inner-con">
                <div className="tab-main mx-auto text-center">

                    <input id="tab1" type="radio" name="tabs" checked/>
                    <label for="tab1"><span className="fa fa-align-center" aria-hidden="true"></span> snack</label>

                    <input id="tab2" type="radio" name="tabs"/>
                    <label for="tab2"><span className="fa fa-bolt" aria-hidden="true"></span> Coffee</label>

                    <input id="tab3" type="radio" name="tabs"/>
                    <label for="tab3"><span className="fa fa-bitbucket" aria-hidden="true"></span> NonCoffee</label>

                    <section id="content1">
                        <div className="ab-info row">
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/5.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Bacon Burger</h4>
                                        <p className="price">$5.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/6.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Cheese Butter</h4>
                                        <p className="price">$15.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/7.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Delicious sandwich</h4>
                                        <p className="price">$25.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/6.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Delicious sandwich</h4>
                                        <p className="price">$35.99</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section id="content2">

                        <div className="ab-info row">
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/8.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Pene Salmone</h4>
                                        <p className="price">$5.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/9.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Cheese Butter</h4>
                                        <p className="price">$15.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/7.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Bolognese Pasta</h4>
                                        <p className="price">$25.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/10.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Tagliatelle Molto</h4>
                                        <p className="price">$35.99</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="content3">
                        <div className="ab-info row">
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/11.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Cola Bottle</h4>
                                        <p className="price">$5.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/12.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Fresh Lime</h4>
                                        <p className="price">$15.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/11.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Cola Bottle</h4>
                                        <p className="price">$25.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ab-content">
                                <div className="tab-wrap">
                                    <img src="images/12.jpg" alt="news image" className="img-fluid"/>
                                    <div className="ab-info-con">
                                        <h4>Kiwi Smoothie</h4>
                                        <p className="price">$35.99</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>


   <section className="gallery py-5" id="gallery">
        <div className="container py-md-5">
            <div className="header text-center">
                <h3 className="tittle mb-lg-5 mb-3">COUNTER </h3>
            </div>
            <div className="row news-grids text-center gallery-wrap">
                <div className="col-md-3 gal-img">
                    <a href="#gal1"><img src="images/g1.jpg" alt="news image" className="img-fluid"/></a>
                </div>
                <div className="col-md-3 gal-img">
                    <a href="#gal2"><img src="images/g2.jpg" alt="news image" className="img-fluid"/></a>
                </div>
                <div className="col-md-3 gal-img">
                    <a href="#gal3"><img src="images/g3.jpg" alt="news image" className="img-fluid"/></a>
                </div>
                <div className="col-md-3 gal-img">
                    <a href="#gal4"><img src="images/g4.jpg" alt="news image" className="img-fluid"/></a>
                </div>

            </div>

           
            <div id="gal1" className="pop-overlay animate">
                <div className="popup">
                    <img src="images/g1.jpg" alt="Popup Image" className="img-fluid" />

                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
           {/* popup */}
            <div id="gal2" className="pop-overlay animate">
                <div className="popup">
                    <img src="images/g2.jpg" alt="Popup Image" className="img-fluid" />

                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            {/* pop IP */}
            <div id="gal3" className="pop-overlay animate">
                <div className="popup">
                    <img src="images/g3.jpg" alt="Popup Image" className="img-fluid" />

                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
            
            <div id="gal4" className="pop-overlay animate">
                <div className="popup">
                    <img src="images/g4.jpg" alt="Popup Image" className="img-fluid" />

                    <a className="close" href="#gallery">&times;</a>
                </div>
            </div>
        </div>
    </section> 
<footer className="footer-content">
        <div className="layer footer">
            <div className="container-fluid">
                <div className="row footer-top-inner-w3ls">
                    <div className="col-lg-4 col-md-6 footer-top mt-md-0 mt-sm-5">
                        <h2>
                            <a href="index.html"><span className="fa fa-align-center" aria-hidden="true"></span>RUFU INDONESIA</a>
                        </h2>
                        <p className="my-3">Donec consequat sam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</p>
                        <p>
                            Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title">Alamat : </h3>
                            <hr/><p>
                            Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci.
                        </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title">Contact Us</h3>
                            <hr/>
                            <div className="last-w3ls-contact">
                                <p>
                                    <a href="mailto:example@email.com">RufuIndonesia@gmail.com</a>
                                </p>
                            </div>
                            <div className="last-w3ls-contact my-2">
                                <p>+62 00000000</p>
                            </div>
                            <div className="last-w3ls-contact">
                                <p>+ 90 0000000000,
                                    <br/>xxx Honey State 049436.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2020 RUFUINDONESIA. All Rights Reserved | Design by
                    <a href="http://facebook.com/tammysuryana"> tammy sruyana </a>
                </p>
                <div className="w3ls-footer text-center mt-4">
                    <ul className="list-unstyled w3ls-icons">
                        <li>
                            <a href="#">
                                <span className="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-vk"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            </div>
           
        </div>
    </footer>
    
    </div>
  );
}

export default App;
