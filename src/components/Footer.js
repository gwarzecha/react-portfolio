import React from 'react'
import { Mail, Linkedin, GitHub } from 'react-feather';

const Footer = () => {
  return (
    <footer className="footer text-center text-white">
      <div className="p-2 pb-0 mt-4">
        <section className="mb-2">
          <a className="btn btn-outline-none btn-floating m-1" href="mailto: gmwarzecha@gmail.com" target="_blank" rel="noreferrer" role="button"
          ><Mail color="#034078ff" size={32} /></a>
          {/* Linkedin */}
          <a className="btn btn-outline-none btn-floating m-1" href="https://linkedin.com/in/garrett-warzecha-878906154" target="_blank" rel="noreferrer" role="button"
          ><Linkedin color="#034078ff" size={32} /></a>
          {/* GitHub */}
          <a className="btn btn-outline-none btn-floating m-1" href="https://github.com/gwarzecha" target="_blank" rel="noreferrer" role="button"
          ><GitHub color="#034078ff" size={32} /></a>
        </section>
      </div>
    </footer>
  )
}

export default Footer
