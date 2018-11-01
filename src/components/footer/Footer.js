import React, { Component } from 'react'


class Footer extends Component {

  render() {
    return (
      <div className="footer-wrapper bg-office-light">
        <div className="footer-text">
          <h6 className="text-black">Kontakt</h6>
          <br/>
          <p><i className="far fa-envelope text-flexibla"></i> Support@officespace.se</p>
          <p><i className="fas fa-phone text-flexibla"></i> 0771-777-777-777</p>
        </div>
      </div>
    )
  }
}

export default Footer;
