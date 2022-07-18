function Buttons ({post}){
  return (
    <div className="container-fluid">
      <div className="row">
			  <div className="col-md-3">
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary size-label">XS</button>
            </div>
                    
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-secondary size-label">S</button>
            </div>
                    
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary size-label">M</button>
            </div>

            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary size-label">ML</button>
            </div>
          </div>

          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary size-label1">L</button>
            </div>
                    
            <div className="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-secondary size-label1">XL</button>
            </div>
                    
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary size-label1">XXL</button>
            </div>
          </div>

          <p className="star-p">Leave a star on Weapons 360 if this<br/> repository was useful :)</p>

          <button type="button" className="btn btn-primary btn-sm star">* Star</button>
          <button type="button" className="btn btn-secondary btn-sm star-848">848</button>



			  </div>

        <div className="col-md-9 row1">
				  <div className="card GP" style={{width: "18rem"}}>
					  <div><p> {post}</p></div>
            <img src="https://media.istockphoto.com/photos/locked-disarmed-and-secured-revolver-gun-on-white-background-picture-id1328784564?k=20&m=1328784564&s=612x612&w=0&h=EgBSlDWLav8VFzJOL2dorwEx8UVzYYxAUq_VfKieJzo=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Revolver</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>150.<span>00</span></li>
              <li className="list-group-item money2">or 3 x $50.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">Add to Cart</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					  <div><p> {post}</p></div>
            <img src="https://media.istockphoto.com/photos/isolated-golden-pistol-on-white-background-picture-id683944188?b=1&k=20&m=683944188&s=170667a&w=0&h=xXoHJ8xC2LkcTysMvi2fcFv-UlcEwwFdaN99xTbhsak=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Gold Pistol</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>250.<span>00</span></li>
              <li className="list-group-item money2">or 5 x $50.00</li>
            </ul>
  
            <div className="card-body cart-body">
              <a href="#about" className="card-link cart-body1">Add to Cart</a>
            </div>
          </div>

          <div className="card GP" style={{width: "18rem"}}>
					<div><p> {post}</p></div>
            <img src="https://media.istockphoto.com/photos/parts-of-automatic-pistol-handgun-with-magazine-on-white-isolated-picture-id1328774115?k=20&m=1328774115&s=612x612&w=0&h=QqYncWxu6afFzjQKJ01lJFrFd7drSJcUwQpo3spoZn4=" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Slider Pistol</h6>
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
					  <div><p> {post}</p></div>
            <img src="https://media.istockphoto.com/photos/black-steel-pistol-with-traces-of-use-and-smoke-coming-out-of-the-picture-id1304241248?k=20&m=1304241248&s=612x612&w=0&h=-Se0jYOjlLx-rlieWMCQJIfapqVlx5uqeVNZab34DkM=" className="card-img-top" alt="Pistol"/>
            <div className="card-body">
              <h6 className="card-title">Smoking Gun</h6>
            </div>

            <ul className="list-group list-group-flush money-list">
              <li className="list-group-item money1"><span>$</span>350.<span>00</span></li>
              <li className="list-group-item money2">or 7 x $50.00</li>
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

export default Buttons;