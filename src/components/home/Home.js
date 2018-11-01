import React, { Component } from 'react'


class Home extends Component {

  render() {
    return (
      <div className="main-wrapper ">
        <div className="home-header pt-5 mb-3">
        <h1 className="text-office-dark">Välkommen till Office Space</h1>
          <h5 className="text-office-dark">Ditt kontor - på språng</h5>
        </div>
        <img className="home-image z-depth-3" src="https://c.pxhere.com/photos/7d/41/startup_start_up_notebooks_creative_computer_company_laptops_display-764671.jpg!d"/>
        <div className="row rad mt-5">
          <div className="home-p-1 left-align text-office-dark">
            <p><b>Att ta hand</b> om administration samtidigt med yrkesrollen som hantverkare är utmanande. Nu har du tillgång till lösningen. Office Space
            Är vår webb-baserade tjänst för dig som driver egen firma. Här hanterar du fakturor, beställningar,
            företagsregister och administrerar dina uppdrag i separata poster. <br/><br/>
            <b>Allt för att</b> göra det tråkiga väldigt mycket enklare.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
