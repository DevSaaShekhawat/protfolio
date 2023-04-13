import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai';
import dp from "../assets/pngtree-lord-ganesha-png-image_2990149.jpg"

const Footer = () => {
  return (
   <footer>
    <div>
        <img
        src={dp}
        alt="Founder"/>
        <h2>Devendra Ratnawat</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
    </div>

    <aside>
        <h2>Social Media</h2>

        <article>
            <a href='https://youtube.com/6packprogrammer' target={"blank"}>
                <AiFillYoutube/>
            </a>
            <a href='https://instagram.com/meabhisingh' target={"blank"}>
                <AiFillInstagram/>
            </a>
            <a href='https://github.com/meabhisingh' target={"blank"}>
                <AiFillGithub/>
            </a>
        </article>
    </aside>
    <a href='#home'>
        <AiOutlineArrowUp/>
    </a>
   </footer>
  )
}

export default Footer