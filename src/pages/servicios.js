import React from 'react'

class Servicios extends React.Component{
    
    render(){
        return(
            <div>
                {/* <!-- START: header --> */}

  <header role="banner" class="probootstrap-header">
   {/*  <!-- <div class="container"> --> */}
    <div class="row">
        <a href="index.html" class="probootstrap-logo visible-xs"><img src="img/LogoSolyLuna1.png" class="hires" width="120" height="33" alt="Free Bootstrap Template by uicookies.com"/></a>
        
        <a href="#" class="probootstrap-burger-menu visible-xs"><i>Menu</i></a>
        <div class="mobile-menu-overlay"></div>

        <nav role="navigation" class="probootstrap-nav hidden-xs">
          <ul class="probootstrap-main-nav">
            <li class="hidden-xs probootstrap-logo-center"><a href="/"><img src="img/LogoSolyLuna1.png" class="hires" width="181" height="50" alt="Free Bootstrap Template by uicookies.com"/></a></li>
            <li><a href="/">Principal</a></li>
            <li><a href="noticias">Noticias</a></li>
            <li class="active"><a href="servicios">Servicios</a></li>            
            <li><a href="habitaciones">Habitaciones</a></li>
            <li><a href="contactenos">Contáctenos</a></li>
            <li><a href="equipo">Equipo de desarrollo</a></li>
            <li><a href="login">Inicio de sesion</a></li>
          </ul>
          <div class="extra-text visible-xs">
            <a href="#" class="probootstrap-burger-menu"><i>Menu</i></a>
            <h5>Conecta con nosotros</h5>
            <ul class="social-buttons">
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-facebook2"></i></a></li>
              <li><a href="#"><i class="icon-instagram2"></i></a></li>
            </ul>
          </div>
        </nav>
        </div>
   {/*  <!-- </div> --> */}
  </header>
  {/* <!-- END: header --> */}

  <section class="probootstrap-slider flexslider probootstrap-inner" data-title= "Navegación guiada" data-intro= "Informacion principal sobre los servicios">
    <ul class="slides">
       <li style={
           {backgroundImage: "url(img/playa.jpg)"}
       } class="overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="probootstrap-slider-text text-center">
                  <p><img src="img/curve_white.svg" class="seperator probootstrap-animate" alt="Free HTML5 Bootstrap Template"/></p>
                  <h1 class="probootstrap-heading probootstrap-animate">Explora nuestros servicios</h1>
                  <div class="probootstrap-animate probootstrap-sub-wrap">Kayak, piscina, bar, entre otras cosas.</div>
                </div>
              </div>
            </div>
          </div>
        </li>
    </ul>
  </section>
  
  <section class="probootstrap-section">
    <div class="container" data-title= "Servicios" data-intro= "Informacion detallada sobre los servicios ofrecidos por el hotel">
      <h3>- KAYAK -</h3>
      <div class="row" data-title= "Kayak" data-intro= "Información acerca del programa de Kayak ofrecido por el hotel">
        <div class="col-md-6">
          <figure>
            <img src="img/kayak.jpg" alt="Free HTML5 Bootstrap Template by uicookies.com" class="img-responsive"/>
            </figure>
        </div>
        <div class="col-md-6">
          <p>El kayak es una variedad de piragua de uno a cuatro tripulantes cuyo uso es fundamentalmente deportivo. En su origen eran de un solo tripulante y se usaban para pescar y cazar.</p>
        </div>
      </div>
      <h3>- PISCINA -</h3>
      <div class="row" data-title= "Piscina" data-intro= "Piscina del hotel">
        <div class="col-md-6">
          <figure>
            <img src="img/piscina.jpg" alt="Free HTML5 Bootstrap Template by uicookies.com" class="img-responsive"/>
            </figure>
        </div>
        <div class="col-md-6">
          <p> El hotel Sol y luna ofrece cinco grandes piscinas, una de ellas en forma de laguna rodeada de grandes palmeras para transportarte a un ambiente de tranquilidad y serenidad.</p>
        </div>
      </div>
      <h3>- BAR -</h3>
      <div class="row" data-title= "Bar" data-intro= "Información acerca del bar interno del hotel">
        <div class="col-md-6">
          <figure>
            <img src="img/bar.jpg" alt="Free HTML5 Bootstrap Template by uicookies.com" class="img-responsive"/>
            </figure>
        </div>
        <div class="col-md-6">
          <p>Relájese en nuestro bar con un trago bien helado y olvídese del trabajo. También será un buen lugar para hacer un brindis por su nuevo negocio. Ofrecemos variedad de tragos y piqueos. Decoración moderna, cómodos asientos y tecnología de punta. Smart TV HD, área de negocios y Wi-Fi de alta velocidad</p>
        </div>
      </div>
    </div>
  </section>

  

  <section class="probootstrap-section probootstrap-section-dark">
    <div class="container" data-title= "Servicios adicionales" data-intro= "Informacion sobre los servicios adicionales a los que tienen acceso los huéspedes">
      <div class="row mb30">
        <div class="col-md-8 col-md-offset-2 probootstrap-section-heading text-center">
          <h2>Servicios Adicionales</h2>
          <p class="lead">Además contamos con:</p>
          <p><img src="img/curve.svg" class="svg" alt="Free HTML5 Bootstrap Template"/></p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="service left-icon probootstrap-animate">
            <div class="icon">
              <img src="img/flaticon/svg/002-wifi.svg" class="svg" alt="Free HTML5 Bootstrap Template by uicookies.com"/>
            </div>
            <div class="text">
              <h3>Wi-fi gratis</h3>
              <p>Contamos con el mejor servicio de internet de fibra óptica del país.</p>
              <p><a href="#" class="link-with-icon">Learn More <i class=" icon-chevron-right"></i></a></p>
            </div>  
          </div>
        </div>
        <div class="col-md-4">
          <div class="service left-icon probootstrap-animate">
            <div class="icon">
              <img src="img/flaticon/svg/003-restaurant.svg" class="svg" alt="Free HTML5 Bootstrap Template by uicookies.com"/>
            </div>
            <div class="text">
              <h3>Restaurantes de 5 estrellas</h3>
              <p>Contamos con los mejores chefs de la región.</p>
              <p><a href="#" class="link-with-icon">Learn More <i class=" icon-chevron-right"></i></a></p>
            </div>  
          </div>
        </div>
        <div class="col-md-4">
          <div class="service left-icon probootstrap-animate">
            <div class="icon">
              <img src="img/flaticon/svg/004-parking.svg" class="svg" alt="Free HTML5 Bootstrap Template by uicookies.com"/>
            </div>
            <div class="text">
              <h3>Servicio de Taxi</h3>
              <p>Servicio de taxi las 24 horas del día.</p>
              <p><a href="#" class="link-with-icon">Learn More <i class=" icon-chevron-right"></i></a></p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="probootstrap-half" data-title= "Gastronomía" data-intro= "Información sobre la gastronomía ofrecida por el hotel">
    <div class="image" style={
        {backgroundImage: "url(img/ceviche.jpg)"}
    }></div>
    <div class="text">
      <div class="probootstrap-animate fadeInUp probootstrap-animated">
        <h2 class="mt0">Restaurantes con gastronomía ecuatoriana de mas alto nivel</h2>
        <p><img src="img/curve_white.svg" class="seperator" alt="Free HTML5 Bootstrap Template"/></p>
        <div class="row">
          <div class="col-md-6">
            <p>La gastronomía del Ecuador es abundante y diversa. Pese a que Ecuador es un país pequeño en extensión, detenta una enorme variedad gastronómica.</p>    
          </div>
          <div class="col-md-6">
            <p>La hostería Sol y Luna, cuenta con varios premios gastronómicos, por lo que siempre ofrecemos a nuestros huéspedes las mejores opciones de comida.</p>    
          </div>
        </div>
        <p><a href="#" class="link-with-icon white">Learn More <i class=" icon-chevron-right"></i></a></p>
      </div>
    </div>
  </section>

  {/* <!-- START: footer --> */}
  <footer role="contentinfo" class="probootstrap-footer">
    <div class="container" data-title= "Reseñas" data-intro= "Reseñas escritas por los huéspedes del hotel">
      <div class="row">
        <div class="col">
          <div class="probootstrap-footer-widget">
            <h3>Reseñas</h3>
            <ul class="probootstrap-blog-list">
              <li>
                <a href="#">
                  <figure class="probootstrap-image"><img src="img/huesped1.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></figure>
                  <div class="probootstrap-text">
                    <h4>Calvin M. Gibson</h4>
                    <span class="meta">Abril 15, 2020</span>
                    <p>El bar tenía todo tipo de bebidas, fue excelente mi estadía en el lugar. Muy recomendable.</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure class="probootstrap-image"><img src="img/huesped2.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></figure>
                  <div class="probootstrap-text">
                    <h4>Georgina H. Sullivan</h4>
                    <span class="meta">Marzo 19, 2019</span>
                    <p>La comida era exquisita, definitivamente tienen el mejor ceviche de pescado de todo el lugar. Sin duda, volveré a quedarme en este lugar.</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure class="probootstrap-image"><img src="img/huesped3.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive"/></figure>
                  <div class="probootstrap-text">
                    <h4>William E. Gallagher</h4>
                    <span class="meta">Enero 2, 2017</span>
                    <p>Mis hijos disfrutaron mucho de lugar y de la piscina, muy bueno el servicio en todo momento. </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt40">
        <div class="col-md-12 text-center">
          <ul class="probootstrap-footer-social">
            <li><a href=""><i class="icon-twitter"></i></a></li>
            <li><a href=""><i class="icon-facebook"></i></a></li>
            <li><a href=""><i class="icon-instagram2"></i></a></li>
          </ul>
          <p>
            <small>&copy; 2021 Todos los derechos Reservados.</small>
          </p>
          
        </div>
      </div>
    </div>
  </footer>
 {/*  <!-- END: footer --> */}
            
            </div>

            

        )
    }
    
}


export default Servicios