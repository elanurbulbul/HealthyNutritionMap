import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { pages } from "./data";
import { socialMedia } from "./data";
import './index.scss';


function AlignmentExample() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <footer>
      <Nav className="footer-nav" activeKey="/home"
      >
        <div className=" footer-list list-page mb-4">
        {pages.map((page) => (
          <Nav.Item key={page.id} onClick={handleChange}>     
            <Nav.Link  href={page.link} className="footer-nav-link">
              {page.text}
              </Nav.Link>
          </Nav.Item>
        ))}
        </div>
        
        <div className="footer-list list-socialmedia">
        {socialMedia.map((page) => (
          <Nav.Item key={page.id} onClick={handleChange}>
            <Nav.Link 
            href={page.url} className="footer-nav-link">
              {page.icon}
              </Nav.Link>
          </Nav.Item>
        ))}
        </div>
        
      </Nav>
    </footer>
  );
}

export default AlignmentExample;
