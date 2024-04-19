import React,{Component} from "react";
 
class MissionSection extends Component{
	render(){
    return (
        <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="index.html" className="image">
            <img src="../../../img/3.jpg" alt="" data-position="center center"style={{ width: '400px', height: '400px' }}/>
          </a>
          <div className="content">
            <div className="inner">
              <h2 style={{ color: 'black' }}>Mission</h2>
              <p style={{ color: 'black' }}>The Bank’s mission is to become the premier International Bank in Morocco providing financial products and services to individuals and corporations in order for them to achieve their personal and business goals.</p>
            </div>
          </div>
        </section>
        <section>
          <a href="index.html" className="image">
            <img src="=../../../img/1.jpg" alt="" data-position="top center" style={{ width: '400px', height: '400px' }} />
          </a>
          <div className="content">
            <div className="inner">
              <h2 style={{ color: 'black' }}>Vision and Core Values</h2>
              <p style={{ color: 'black' }}>To be recognized as a premier financial institution operating internationally based on the pillars of integrity and honesty </p>
            </div>
          </div>
        </section>
        <section>
          <a href="index.html" className="image">
            <img src="../../../img/2.jpg" alt="" data-position="25% 25%" style={{ width: '400px', height: '400px' }} />
          </a>
          <div className="content">
            <div className="inner">
              <h2 style={{ color: 'black' }}>Trust</h2>
              <p style={{ color: 'black' }}>Based on a culture of respect and transparency where ethic and hard work are not compromised</p>
            </div>
          </div>
        </section>
      </section>
    );
  }
  
  
}

export default  MissionSection 