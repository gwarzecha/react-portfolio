import React from 'react';
import { Mail, Linkedin, GitHub } from 'react-feather';


function ContactForm() {

  return (
    <section className="container d-flex contactCont justify-content-center" >
      <div className='row'>
        <div className='col-12 p-4'>
          <h1 className='d-flex justify-content-center mainFont'>Get in Touch!</h1>
        </div>
        <div className='col-12 justify-content-center'>
          <p className='mainFont contactInfo'>Phone:
            <a href='tel:480-321-7571' rel='nofeferrer' target='blank' className='mainFont'> 480.321.7571</a>
          </p>
          <p className='mainFont'>Email:
            <a href="mailto: gmwarzecha@gmail.com" target="_blank" className='mainFont'> gmwarzecha@gmail.com</a>
          </p>
          <p className='mainFont'>LinkedIn:
          <a href="https://linkedin.com/in/garrett-warzecha-878906154" 
                target="_blank"> <Linkedin color="#034078ff" size={32} /></a>
          </p>
          <p className='mainFont'>GitHub:
          <a href="https://github.com/gwarzecha" target="_blank"> <GitHub color="#034078ff" size={32} /></a>
          </p>
        </div>
      </div>
    </section>
  );

}

export default ContactForm;