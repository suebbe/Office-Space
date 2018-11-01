import React, { Component } from 'react'


class Assignment extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="button-wrapper">
          <button type="button" className="btn new-button text-white z-depth-2 bg-office-dark ">Nytt uppdrag
          </button>
        </div>

        <div className="table-wrapper z-depth-3 table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Uppdragsnummer</th>
                <th scope="col">Datum</th>
                <th scope="col">Avser</th>
                <th scope="col">Kund</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005123 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-09-18 </td>
                <td>Badrumsrenovering</td>
                <td>Karl Svensson</td>
                <td>Pågående</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S004985 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-08-07</td>
                <td>Byte duch/badkar</td>
                <td>Anders Johansson</td>
                <td>Pågående</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005233 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-10-12</td>
                <td>Nybygge Bastu</td>
                <td>Niklas Karlsson</td>
                <td>Pågående</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005243 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-10-01</td>
                <td>Ombyggnad WC</td>
                <td>Elin Sigurdsson</td>
                <td>Pågående</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005242 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-08-16</td>
                <td>Renovering badrum</td>
                <td>Melina Jonsson</td>
                <td>Avslutat</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005241 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-06-30</td>
                <td>Nybygge SPA</td>
                <td>Thomas Hedemyr</td>
                <td>Avslutat</td>
              </tr>
              <tr>
                <a className="assign" href="http://www.google.se" scope="row">S005237 <i class="far fa-edit"></i> <i class="far fa-trash-alt"></i></a>
                <td>2018-07-07</td>
                <td>Ombyggnad Gäst WC</td>
                <td>Joakim Janemark</td>
                <td>Avslutat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Assignment;
