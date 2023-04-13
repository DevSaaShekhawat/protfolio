import React from 'react'

const Testmonial = () => {
  return (
    <div  id='testimonial'>
        <h2>Testimonial</h2>

        <section>
            <TestimonialCard name={"Devendra"} feedback={"Your Teaching skills are so good."}/>
            <TestimonialCard name={"DevRaj"} feedback={"Wow what a portfolio, doesn't expected this to be on youtube!"}/>
            <TestimonialCard name={"Sundar Pichai"} feedback={"Amazing seems like you should the Google CEO"}/>
        </section>
    </div>
  )
}

const TestimonialCard= ({name, feedback})=>(
    <article>
        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='User' />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testmonial