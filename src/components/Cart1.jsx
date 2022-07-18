function Cart1 ({shop}){
  return(
    <div className="container-fluid">
      <div className="row">
			  <div className="col-md-3"></div>

			  <div className="col-md-9 row1">
				  <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/gun-with-clipping-path-picture-id173240129?k=20&m=173240129&s=612x612&w=0&h=PUmq8Pm-0E1pGpuJAeqVfzGCN5d7dZ-UEQQ4suSUJuk=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Modern Pistol</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>500.<span>00</span></li>
              <li className="list-group-item money2">or 10 x $50.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">{shop}</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/isolated-shot-of-black-pistol-on-white-background-picture-id669445566?k=20&m=669445566&s=612x612&w=0&h=4ZmqZByfy_6RT66LXq7IVqM6tHSAxSzWTGth4FhFNtE=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Rusty Pistol</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>120.<span>00</span></li>
              <li className="list-group-item money2">or 2 x $60.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">{shop}</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/glock-picture-id89485543?k=20&m=89485543&s=612x612&w=0&h=Dw3d72Kip7TrUNGJf4yTwZFhuplZkDvq9oFsmYRF2KM=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Sleek Pistol</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>450.<span>00</span></li>
              <li className="list-group-item money2">or 3 x $150.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">{shop}</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/modern-semiautomatic-handgun-isolated-on-white-picture-id155153157?k=20&m=155153157&s=612x612&w=0&h=VLU07OLdttUeeIODIH9CC1NKKc9s75sTsjY-Rw-Dj_I=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Striking Pistol</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>350.<span>00</span></li>
              <li className="list-group-item money2">or 7 x $50.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">{shop}</a>
            </div>
          </div>
			  </div>
		  </div> <br/><br/>    
    </div>

  );
}

export default Cart1;