import React, { Component } from 'react'


class Coworkers extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="button-wrapper">
          <button type="button" className="btn new-button text-white z-depth-2 bg-office-dark">Ny Medarbetare
          </button>
        </div>
        <hr/>
      <div className="card-wrapper card-group center-align mt-4">
          <div className="card z-depth-3">
            <img className="card-img-top" src="https://i.chzbgr.com/full/8334924544/h9562D901/" alt="Card image cap"/>
            <div className="card-body bg-office-light text-light">
              <h6 className="card-title">Joakim Haapanen</h6>
              <p className="card-text">Ägare</p>
            </div>
            <div className="card-body bg-office-dark">
              <a href="#" className="card-link"><i className="far fa-envelope"></i> joakim@officespace.se</a>
              <br/>
              <a href="#" className="card-link"><i className="fas fa-phone"></i> 0760 32 32 32</a>
            </div>
          </div>
          <div className="card z-depth-3">
            <img className="card-img-top" src="https://i.chzbgr.com/full/8334924544/h9562D901/" alt="Card image cap"/>
            <div className="card-body bg-office-light text-light">
              <h6 className="card-title">Erik Jonsson</h6>
              <p className="card-text">VVS-montör</p>
            </div>
            <div className="card-body bg-office-dark">
              <a href="#" className="card-link"><i className="far fa-envelope"></i> erik@officespace.se</a>
              <br/>
              <a href="#" className="card-link"><i className="fas fa-phone"></i> 0760 33 22 32</a>
            </div>
          </div>
          <div className="card z-depth-3">
            <img className="card-img-top" src="https://i.chzbgr.com/full/8334924544/h9562D901/" alt="Card image cap"/>
            <div className="card-body bg-office-light text-light">
              <h6 className="card-title">Sebastian Sandqvist</h6>
              <p className="card-text">VVS-montör</p>
            </div>
            <div className="card-body bg-office-dark">
              <a href="#" className="card-link"><i className="far fa-envelope"></i> sebastian@officespace.se</a>
              <br/>
              <a href="#" className="card-link"><i className="fas fa-phone"></i> 0760 33 44 43</a>
            </div>
          </div>
          <div className="card z-depth-3">
            <img className="card-img-top" src="https://i.chzbgr.com/full/8334924544/h9562D901/" alt="Card image cap"/>
            <div className="card-body bg-office-light text-light">
              <h6 className="card-title">Arne Weise</h6>
              <p className="card-text">VVS-montör</p>
            </div>
            <div className="card-body bg-office-dark">
              <a href="#" className="card-link"><i className="far fa-envelope"></i> arne@officespace.se</a>
              <br/>
              <a href="#" className="card-link"><i className="fas fa-phone"></i> 0760 44 33 22</a>
            </div>
          </div>
      </div>

      </div>
    )
  }
}

export default Coworkers;
