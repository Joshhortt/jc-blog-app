import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm tracking-wide py-10 flex justify-center p-4">
     <div>&copy; {new Date().getFullYear()} | Creative Lightbox Media | JAMstack Web Development & Design</div> 
    </footer>
  );
}