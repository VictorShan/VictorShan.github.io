import styles from './NavBar.module.sass'

export default function NavBar() {
  return (
    <nav className={"navbar navbar-expand navbar-light sticky-top " + styles.navbar}>
      <a className={"navbar-brand"} href={"#"}>
        <img 
          src={"/images/EagleLogo.jpg"}
          width="30"
          height="30"
          className={"d-inline-block align-top " + styles.logo}
          alt=""
          loading="lazy" />
        Victor Shan
      </a>
      <div className="navbar-nav-scroll">
        <div className="navbar-nav bd-navbar-nav flex-row">
          <a className="nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
          <a className="nav-link active" href="#projects">Projects</a>
          {/* {<a className="nav-link" href="#">Pricing</a>} */}
          {/* {<a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>} */}
        </div>
      </div>
    </nav>
  )
}