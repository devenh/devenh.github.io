var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="./calc.html">Collaborate</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="../navbar/">Home</a></li>
                <li><a href="../navbar-static-top/">Log Out</a></li>
              </ul>
            </div>
          </div>
        </nav>

<div id="h">
  <div className="container precalculus">
    <div className="row centered">
      <br /><br /><br /><br /><br /><br />
      <h3 className="logo aligncenter">Collaborate<br/></h3>
      <h1>Precalculus topics</h1>

      <div className="col-md-6 col-md-offset-3 mt">
        <form role="form" action="register.php" method="post" enctype="plain">
            <input type="email" name="email" className="subscribe-input" placeholder="Enter Course Name" required />
          <button className='btn btn-lg btn-green subscribe-submit' type="submit">Search</button>
        </form>
      </div>
    </div>

    <div className="row">
      <div className="continue">
        <i className="ion-chevron-down"></i>
      </div>
    </div>
  </div>
</div>


<div className="container mt">
  <div className="row">
    <div className="col-md-6 col-md-offset-3 centered">
      <h2>Precalculus</h2>

      <div className="each">
        <h4 id="each-topic"><a href="#">1. Function</a></h4>
        <div id="hidden" >
          <h4>Rate:</h4>
          <div className="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <h4>Ask a question!</h4>
          <form role="form" action="register.php" method="post" enctype="plain">
              <input type="email" name="email" className="subscribe-input" placeholder="Enter question" required />
            <button className='btn btn-lg btn-green subscribe-submit' type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="each">
        <h4 id="each-topic"><a href="#">2. Domain</a></h4>
        <div id="hidden" >
          <div className="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <h4>Ask a question!</h4>
          <form role="form" action="register.php" method="post" enctype="plain">
              <input type="email" name="email" className="subscribe-input" placeholder="Enter question" required />
            <button className='btn btn-lg btn-green subscribe-submit' type="submit">Search</button>
          </form>
        </div>
      </div>



      <h4><a href="#">3. Range</a></h4>
    </div>
  </div>
</div>

<div id="g">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 centered">
        <h2>How It Works</h2>
        <h4>The Steps Of Our Success</h4>
      </div>
    </div>

    <div className="row mt">
      <div className="col-md-4">
        <h4 className="green">STEP 1</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <h4 className="green mt">STEP 2</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="col-md-4">
        <img src="assets/img/item.png" alt="" className="img-responsive aligncenter" data-effect="slide-bottom" />
      </div>
      <div className="col-md-4">
        <h4 className="green">STEP 3</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <h4 className="green mt">STEP 4</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>

    <div className="row mt">
      <div className="col-md-4 col-md-offset-4 centered">
        <button className="btn btn-lg btn-green">Download Our PDF</button>
      </div>
    </div>
  </div>
</div>


<div className="container">
  <div className="row mtb">
    <div className="col-md-6 col-md-offset-3 centered">
      <p className="text28">
        <a href="#"><i className="ion-social-twitter"></i></a>
        <a href="#"><i className="ion-social-instagram"></i></a>
        <a href="#"><i className="ion-social-facebook"></i></a>
      </p>
      <p>Collaborate.com | Copyright 2015</p>
    </div>
  </div>
</div>   

</div>  
        );
    }
})