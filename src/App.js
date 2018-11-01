import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Assignment from './components/assignment/Assignment';
import Calendar from './components/calendar/Calendar';
import Catalogue from './components/catalogue/Catalogue';
import Header from './components/header/Header';
import Help from './components/help/Help';
import Indexes from './components/indexes/Indexes';
import Invoice from './components/invoice/Invoice';
import Mycompany from './components/mycompany/Mycompany';
import Navmenu from './components/navmenu/Navmenu';
import Statistics from './components/statistics/Statistics';
import Timesheet from './components/timesheet/Timesheet';
import User from './components/user/User';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import Office from './office-space-logo.png';
import Coworkers from './components/coworkers/Coworkers';


class App extends Component {

  state = {
  page: 'home'
}

_clickedMenuOption = (event) => {
  if (event.target.name === 'Assignment') {
    this.setState({ page: 'assignment' })
  } else if (event.target.name === 'Calendar') {
    this.setState({ page: 'calendar' })
  } else if (event.target.name === 'Catalogue') {
    this.setState({ page: 'catalogue' })
  } else if (event.target.name === 'Help') {
    this.setState({ page: 'help' })
  } else if (event.target.name === 'Indexes') {
    this.setState({ page: 'indexes' })
  } else if (event.target.name === 'Invoice') {
    this.setState({ page: 'invoice' })
  } else if (event.target.name === 'Mycompany') {
    this.setState({ page: 'mycompany' })
  } else if (event.target.name === 'Products') {
    this.setState({ page: 'products' })
  } else if (event.target.name === 'Statistics') {
    this.setState({ page: 'statistics' })
  } else if (event.target.name === 'Timesheet') {
    this.setState({ page: 'timesheet' })
  } else if (event.target.name === 'User') {
    this.setState({ page: 'user' })
  } else if (event.target.name === 'Home') {
    this.setState({ page: 'home' })
  } else if (event.target.name === 'Coworkers') {
    this.setState({ page: 'coworkers' })
  }

}

_displayPage = () => {
  if (this.state.page === 'assignment'){
    return (
      <Assignment />
    )
  } else if (this.state.page === 'calendar') {
    return (
      <Calendar />
    )
  } else if (this.state.page === 'catalogue') {
    return (
      <Catalogue />
    )
  } else if (this.state.page === 'help') {
    return (
      <Help />
    )
  } else if (this.state.page === 'indexes') {
    return (
      <Indexes />
    )
  } else if (this.state.page === 'invoice') {
    return (
      <Invoice />
    )
  } else if (this.state.page === 'products') {
    return (
      <Products />
    )
  } else if (this.state.page === 'statistics') {
    return (
      <Statistics />
    )
  } else if (this.state.page === 'timesheet') {
    return (
      <Timesheet />
    )
  } else if (this.state.page === 'home') {
    return (
      <Home />
    )
  } else if (this.state.page === 'mycompany') {
    return (
      <Mycompany />
    )
  } else if (this.state.page === 'coworkers') {
    return (
      <Coworkers />
    )
  }
}





  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="main-header">
            <div className="left-align">
              <img src={ Office } width="300" className="logotype"/>
              <div className="search-wrapper bg-office-light">
                <div className="input-group search-bar">
                  <input type="text" className="form-control search-field" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-dark bg-office-dark text-white search-button " type="button" id="button-addon2">Sök</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-wrapper">
            <p className="userName">Välkommen: <b className="text-light">Sebastian Sandqvist</b> <a href="#" className="text-dark"><i class="fas fa-sign-out-alt"></i></a></p>
            </div>
            <div className="navigation-wrapper right-align ">
              <nav className="navbar navbar-expand-lg navbar-dark bg-black center-align">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav text-white">
                  <div className="settings-wrapper right-align">
                    <a onClick={this._clickedMenuOption} className="far fa-question-circle help" name="Help"></a>
                  </div>
                    <li className="nav-item">
                      <a onClick={this._clickedMenuOption} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" name="Home"><i class="fas fa-home"></i> Hem</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this._clickedMenuOption} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" name="Assignment"><i class="fas fa-pencil-ruler"></i> Uppdrag</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this._clickedMenuOption} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" name="Timesheet"><i class="fas fa-user-clock"></i> Tidrapporter</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this._clickedMenuOption} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link"  name="Calendar"><i class="far fa-calendar-alt"></i> Kalender</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this._clickedMenuOption} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" name="Invoice"><i class="fas fa-file-invoice"></i> Fakturering</a>
                    </li>
                    <li className="nav-item">
                      <a onClick={this._clickedMenuOption} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link" name="Products"><i class="fas fa-shopping-basket"></i> Produkter</a>
                    </li>
                    <li className="nav-item dropdown left-align">
                      <a className="nav-link dropdown-toggle dropbutton" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-briefcase"></i> Mitt företag
                      </a>
                      <div className="dropdown-menu bg-black text-white left-align z-depth-2" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" onClick={this._clickedMenuOption} data-target="#navbarNavDropdown" name="Mycompany">Företagsuppgifter</a>
                        <hr/>
                        <a className="dropdown-item" onClick={this._clickedMenuOption}  data-target="#navbarNavDropdown" name="Coworkers">Medarbetare</a>
                        <hr/>
                        <a className="dropdown-item" name="Registry">Register</a>
                        <hr/>
                        <a className="dropdown-item" name="Statistics">Statistik</a>
                        <hr/>
                        <a className="dropdown-item" name="My-prices">Mina Prislistor</a>
                        <hr/>
                        <a className="dropdown-item" name="Gross-prices">Grossistpriser</a>
                        <hr/>
                        <a className="dropdown-item" name="price-formulas">Prisformler</a>
                        <hr/>
                        <a className="dropdown-item" name="Log">Logg</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

          </div>
        </div>
        { this._displayPage() }
        <Footer />
      </div>
    );
  }
}

export default App;
