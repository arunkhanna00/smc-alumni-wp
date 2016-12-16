<!DOCTYPE html>
<html lang="en" ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SMC Alumni</title>
    <?php wp_head();?>
  </head>
  <body>

  <!-- Navbar -->
    <header>
      <nav class = "navbar navbar-default">
        <div class = "container menu-width">
          <!-- SMC Logo Placeholder -->
          <a class="nav" href="#/"><img src="https://placehold.it/120x80"></a>
          
          <div class = "navbar-header">
            <a class = "navbar-brand" href="#/"> Alumni Association</a>
            
            <!-- Menu button -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <!-- Navigation menu -->
          <div class="collapse navbar-collapse navbar-right" id="menu">
            <ul class = "nav navbar-nav">
              <li><a href="#events">Events</a></li>
              <li><a href="https://thecampustap.com/" target="_blank">Network</a></li>
              <li class="dropdown">
                <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Media <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="https://medium.com/" target="_blank">Alumni Stories</a></li>
                  <li><a href="https://youtube.com/" target="_blank">Graduation Videos</a></li>
                  <li><a href="https://youtube.com/" target="_blank">Proud To Be SMC</a></li>
                  <li><a href="https://instagram.com/" target="_blank">Gallery</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#join">Join Us</a></li>
              <li class="dropdown">
                <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Support Us<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="https://www.smcfulfillment.com" target="_blank">Store</a></li> 
                  <li><a href="#why">Why Donate?</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#donate">Donate</a></li>
                </ul>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    </header>