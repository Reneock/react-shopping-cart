import React, {Component} from 'react';

class Navbar extends Component {
  render(){
    return (
      
      <div className="container-fluid">
		    <div className="row">
			    <nav className="nav">
            <a className="nav-link active size" href="#size">Sizes:</a>
            <a className="nav-link products" href="#products">I6 Product(s) found.</a>
            <a className="nav-link" href="#home">
              <form>
                <div className="form-row align-items-center order">
                  <p>Order by</p>
                  <div className="col-auto my-1">
                    <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                    <select className="custom-select mr-sm-2 select-bar" id="inlineFormCustomSelect">
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </form>
            </a>
          </nav>
		    </div><br/><br/>
      </div>

    );
  }
}

export default Navbar;