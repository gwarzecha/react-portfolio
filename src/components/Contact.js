import React, { useState } from 'react';


function ContactForm() {

  return (
    <section className="container d-flex contactCont justify-content-center" >
      <div className='row'>
        <div className='col-12 p-4'>
          <h1 className='d-flex justify-content-center mainFont'>Get in Touch!</h1>
        </div>
        <div className='col-12 justify-content-center'>
          <p>Phone:
            <a href='tel:480-321-7571' rel='nofeferrer' target='blank'> 480.321.7571</a>
          </p>
          <p>Email:
            <a href="mailto: gmwarzecha@gmail.com" target="_blank"> gmwarzecha@gmail.com</a>
          </p>
          <p>LinkedIn:
          <a href="https://linkedin.com/in/garrett-warzecha-878906154" 
                target="_blank"> LinkedIn</a>
          </p>
          <p>GitHub:
          <a href="https://github.com/gwarzecha" target="_blank"> GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );

}

export default ContactForm;