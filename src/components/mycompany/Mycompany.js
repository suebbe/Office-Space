import React, { Component } from 'react'


class Mycompany extends Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="button-wrapper">
          <button type="button" className="btn new-button text-white z-depth-2 ">Spara
          </button>
        </div>
        <div className="background-wrapper pt-3 pb-3 z-depth-3 mt-4  text-office-dark">
          <h3>Office Space AB</h3>
        <div className="input-wrapper-left">
          <form>
            <div class="col left-align">
               <label for="formGroupExampleInput">Företagsnamn</label>
                 <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="Office Space AB"/>
            </div>
          <br/>
            <div class="col left-align">
               <label for="formGroupExampleInput">Organisationsnummer
               </label>
                 <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="555555-5555"/>
            </div>
          </form>
          <br/>
          <form>
            <div class="col left-align">
              <label for="formGroupExampleInput">Telefonnummer
              </label>
                <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="08-326 326"/>
           </div>
           <br/>
           <div class="col left-align">
              <label for="formGroupExampleInput">E-postadress</label>
                <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="info@officespace.se"/>
           </div>
         </form>
         <br/>
       </div>
         <div className="input-wrapper-right">
           <form>
              <div class="col left-align">
                <label for="formGroupExampleInput">Adress
                </label>
                  <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="Österskärsvägen 12A"/>
              </div>
            <br/>
              <div class="col left-align">
                <label for="formGroupExampleInput">Postadress</label>
                  <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="184 53 ÅKERSBERGA"/>
              </div>
           </form>
           <br/>
           <form>
              <div class="col left-align">
                <label for="formGroupExampleInput">Plusgiro</label>
                  <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="325-3253"/>
              </div>
              <br/>
                <div class="col left-align">
                  <label for="formGroupExampleInput">Bankgiro</label>
                     <input type="text" class="form-control input-box bg-light z-depth-2" placeholder="326-3263"/>
                </div>
             </form>
             <br/>
           </div>
           </div>

      </div>
    )
  }
}

export default Mycompany;
