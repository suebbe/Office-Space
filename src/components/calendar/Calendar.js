import React, { Component } from 'react'


class Calendar extends Component {

  render() {
    return (
      <div className="main-wrapper">
              <div className="button-wrapper  mb-3">
      <button type="button" className="btn new-button text-white z-depth-2">Ny kalenderpost
      </button>
      </div>
        <div>
        <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=support%40flexiblakontoret.nu&amp;color=%231B887A&amp;ctz=America%2FNew_York"></iframe>
        </div>

      </div>
    )
  }
}

export default Calendar;
