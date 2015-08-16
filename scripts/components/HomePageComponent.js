var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div id="container" className="container intro-effect-push">
                <div className="codrops-top clearfix">
                    <span className="right"><a className="" href="#"><span>Log In</span></a></span>
                </div>
                <header className="header">
                    <div className="bg-img"><img src="img/12.jpg" alt="Background Image"/></div>
                    <div className="title">
                        <nav className="codrops-demos">
                            <a className="current-demo" href="index.html"></a>
                        </nav>
                        <h1>CollabOrate</h1>
                    </div>
                </header>
                <button className="trigger" id="trigger1" onClick={this.doStuff} data-info="Click to learn more"><span>trigger</span></button>
                <div className="title">
                    <h1 className="secondheader">About CollabOrate</h1>
                    <p className="subline">Made @ Startup Weekend Austin</p>
                    <p>by <strong>People</strong> &#8212; Posted in <strong>Inspiration</strong> on <strong>May 21, 2014</strong></p>
                </div>
                <article className="content">
                    <div>
                        <p>We may define a food to be any substance which will repair the functional waste of the body, increase its growth, or maintain the heat, muscular, and nervous energy. </p>
                        <p>In its most comprehensive sense, the oxygen of the air is a food; as although it is admitted by the lungs, it passes into the blood, and there re-acts upon the other food which has passed through the stomach. It is usual, however, to restrict the term food to such nutriment as enters the body by the intestinal canal. Water is often spoken of as being distinct from food, but for this there is no sufficient reason.</p>
                        <h3>Flesh-formers, heat-givers, and bone-formers</h3>
                        <p>Mineral matter is quite as necessary for plant as for animal life, and is therefore present in all food, except in the case of some highly-prepared ones, such as sugar, starch and oil. Children require a good proportion of calcium phosphate for the growth of their bones, whilst adults require less. The outer part of the grain of cereals is the richest in mineral constituents, white flour and rice are deficient. Wheatmeal and oatmeal are especially recommended for the quantity of phosphates and other salts contained in them. Mineral matter is necessary not only for the bones but for every tissue of the body.</p>
                        <p>When haricots are cooked, the liquid is often thrown away, and the beans served nearly dry, or with parsley or other sauce. Not only is the food less tasty but important saline constituents are lost. The author has made the following experiments:—German whole lentils, Egyptian split red lentils and medium haricot beans were soaked all night (16 hours) in just sufficient cold water to keep them covered. The water was poured off and evaporated, the residue heated in the steam-oven to perfect dryness and weighed. After pouring off the water, the haricots were boiled in more water until thoroughly cooked, the liquid being kept as low as possible. The liquid was poured off as clear as possible, from the haricots, evaporated and dried. The ash was taken in each case, and the alkalinity of the water-soluble ash was calculated as potash (K2O). The quantity of water which could be poured off was with the German lentils, half as much more than the original weight of the pulse; not quite as much could be poured off the others.</p>
                    </div>
                </article>
                <section className="related">
                    <p>blah</p>
                    <div><a href="#"><h4>Link1</h4></a></div>
                    <div><a href="#"><h4>Link2</h4></a></div>
                </section>

                <div className = "end">
                    <h2>sadfas fd</h2>
                </div>
            </div>
        );
    }
});