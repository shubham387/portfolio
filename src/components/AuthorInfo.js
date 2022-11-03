
export default function AuthorInfo() {
    return (
      <section id="author-info" className='author-section-container'>
        <div className='author-image'>
          <img src='./pic.png' />
        </div>
        <div className='author-info'>
          <h3 className='heading'>Hi, I am Shubham, Web Developer</h3>
          <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <a href="..\src\Profile.pdf" download><button className='download-resume'>Download Resume</button></a>
        </div>
      </section>
    )
    
  }