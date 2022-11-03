export default function Header() {
    return(
      <nav>
        <div id="hamburger"></div>
        <div id="main-nav" className='sidebar-panel'>
          <ul className='nav-list'>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    )
  }