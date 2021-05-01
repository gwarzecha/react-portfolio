import React from 'react'
import { Mail, Linkedin, GitHub } from 'react-feather';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-center text-white">
      <div className="container p-2 pb-0">
        <section className="mb-2">
          <a className="btn btn-outline-light btn-floating m-1" href="mailto: gmwarzecha@gmail.com" target="_blank" role="button"
          ><Mail color="white" size={32} /></a>
          {/* Linkedin */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/in/garrett-warzecha-878906154" target="_blank" role="button"
          ><Linkedin color="white" size={32} /></a>
          {/* GitHub */}
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/gwarzecha" target="_blank" role="button"
          ><github /><GitHub color="white" size={32} /></a>
        </section>
      </div>
    </footer>
  )
}

export default Footer
