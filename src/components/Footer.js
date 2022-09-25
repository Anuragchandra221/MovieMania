const Footer = ()=>{
    return (
        <div>
        <div style={{position: 'relative'}}>
              {/* <hr style={{color: '#FFAD00', border: '1px solid #FFAD00'}} /> */}
              <svg className="mt-3 mt-lg-0 mb-3 mb-lg-0" style={{position: 'absolute', top: '-21%', right: '50%'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.0013 12.8327C10.223 12.8327 12.8346 10.221 12.8346 6.99935C12.8346 3.77769 10.223 1.16602 7.0013 1.16602C3.77964 1.16602 1.16797 3.77769 1.16797 6.99935C1.16797 10.221 3.77964 12.8327 7.0013 12.8327Z" stroke="#FFAD00" strokeOpacity="0.7" strokeWidth="1.16667"/>
                  <path d="M4.66797 6.12402L7.0013 8.45736L9.33464 6.12402" stroke="#FFAD00" strokeOpacity="0.7" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <i className="fa fa-arrow-up-from-arc" style={{color: '#FFAD00'}}></i>
            </div>
            <p className="mt-2 mt-lg-0"  style={{color: '#fff', fontFamily: 'Original Surfer, sans-serif', fontSize: 'xx-large', textAlign: 'center'}}><span style={{color: '#FFAD00'}}>M</span>ovie<span style={{color: '#FFAD00'}}>M</span>ania </p>
            <div style={{textAlign: 'center'}}>
            <i className="fa-brands fa-instagram mr-3" style={{fontSize: 'x-large', color: '#FFAD00'}}></i>
            <i className="fa-brands fa-facebook mr-3" style={{fontSize: 'x-large', color: '#FFAD00'}}></i>
            <i className="fa-brands fa-twitter mr-3" style={{fontSize: 'x-large', color: '#FFAD00'}}></i>
            <i className="fa-brands fa-youtube" style={{fontSize: 'x-large', color: '#FFAD00'}}></i>
            </div>
            <p className='mt-3' style={{color: '#fff', textAlign: 'center', fontWeight: '100'}}>About | Terms and Conditions | Services | Contact | Donate </p>
            <p className='mt-3' style={{color: '#fff', textAlign: 'center' , fontWeight: '100'}}>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
          </div>
    )
}
export default Footer