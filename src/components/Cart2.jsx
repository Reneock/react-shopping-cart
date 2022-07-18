function Cart2 ({title , name, type, desc}){
  return(
    <div className="container-fluid">
      <div className="row">
			  <div className="col-md-3"></div>

			  <div className="col-md-9 row1">
				  <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/black-gun-picture-id480375680?k=20&m=480375680&s=612x612&w=0&h=PIhVdQansEU92doYTJvOlyIFQcZj6RMuV9K37iLZhLs=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">{title}</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>280.<span>00</span></li>
              <li className="list-group-item money2">or 4 x $70.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">Add to Cart</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/gun-and-bullets-picture-id185272709?k=20&m=185272709&s=612x612&w=0&h=-ZvJezpVp2OPjPxKZyOSOcuqh4R9m4lSf9eR9kkfRqg=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">{name}</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>550.<span>00</span></li>
              <li className="list-group-item money2">or 5 x $110.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">Add to Cart</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/handgun-picture-id535481859?k=20&m=535481859&s=612x612&w=0&h=bAzyTH9GO-QdlcXS3xf1jqeqULmA8Jh6jdNrAPcbWpc=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">{type}</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>300.<span>00</span></li>
              <li className="list-group-item money2">or 5 x $60.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">Add to Cart</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> Free Shipping</p></div>
            <img src="https://media.istockphoto.com/photos/old-rusty-revolver-handgun-picture-id1031843744?k=20&m=1031843744&s=612x612&w=0&h=xiphc_y9KfvbDzS2rbhgX5m1WBg1rCbtoz4ky52NZ_c=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">{desc}</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>850.<span>00</span></li>
              <li className="list-group-item money2">or 5 x $170.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">Add to Cart</a>
            </div>
          </div>
			  </div>
		  </div><br/><br/><br/>

    </div>

  );
}

export default Cart2;