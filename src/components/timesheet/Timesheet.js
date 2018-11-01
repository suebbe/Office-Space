import React, { Component } from 'react'


class Timesheet extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="button-wrapper">
          <button type="button" className="btn new-button text-white z-depth-2 "> Ny tidrapportering
          </button>
        </div>
        <div className="table-wrapper z-depth-3 table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Uppdragsnummer</th>
                <th scope="col">Kund</th>
                <th scope="col">Aktivitet</th>
                <th scope="col">Datum</th>
                <th scope="col">Medarbetare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>Karl Svensson</td>
                <td>Badrumsrenovering</td>
                <td>2018-09-18 </td>
                <td>Tony Häppänän</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Timesheet;
