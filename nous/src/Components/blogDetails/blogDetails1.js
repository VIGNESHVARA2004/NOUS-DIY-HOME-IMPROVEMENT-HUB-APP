import "./blogDetails.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import photo1 from "./blogContent1.png";
import photo2 from "./blogContent2.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export function BlogDetails1() {

  const handleChange=(e)=>{
    const pClassList = e.target.parentElement;
    if(e.target.classList.contains("nonselected")){
    for (let i=0; i<pClassList.childNodes.length;i++){
      if(pClassList.childNodes[i].className === ("blogD-tag selected")){
        pClassList.childNodes[i].className = "blogD-tag nonselected"
      }
    }
          e.target.classList.remove("nonselected")
      e.target.classList.add("selected")
    }
    else if(e.target.classList.contains("selected")) {
      for (let i=0; i<pClassList.childNodes.length;i++){
        if(pClassList.childNodes[i].className === ("blogD-tag selected")){
          pClassList.childNodes[i].className = "blogD-tag nonselected"
        }
      }
    }
  }

  return (
    <div className="blogDetails">
      <div className="blogD-header"></div>
      <div className="blogDetailsAll">
        <div className="blog-content">
          <h1>Let's Get Solution for Building Construction Work</h1>
          <div className="bc-photo">
            <img src={photo1} alt="blog"></img>
          </div>
          <div className="datePath">
            <p className="date">26 December 2022</p>
            <p className="path">Interior / Design / Home / Decore</p>
          </div>
          <div className="bc-text t1">
            <p>
            There are many Variations of passages of Lorem Ipsum are available, but the majority
              have suffered alteration in some form, by injecthumour, or
              randomized words which don't look even slightly believable.
              <br />
              <br />
              Embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary.
            </p>
          </div>
          <div className="blogD-quotes">
            <div className="blogD-q-content">
              <h1>“</h1>
              <p className="blogD-q-comment">
                The details are not the details. They make the design.
              </p>
            </div>
          </div>

          <div className="bc-text t2">
            <h1>Design sprints are great</h1>
            <p>
            It's very important to have a good team, coaching a football coach for life
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered
              <ul>
                <li>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </li>
                <li>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </li>
                <li>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </li>
              </ul>
            </p>
          </div>
          <div className="bc-photo">
            <img src={photo2} alt="blog"></img>
          </div>

          <div className="bc-text t3">
            <p>
            It's very important to have a good team, coaching a football coach for life
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered
            </p>
            <container>
              <div className="map">
        <iframe
          src="https://youtube.com/embed/oEC1G8dKceo?feature=shared"
          title="map"
          style={{
            frameborder: "0",
            allowfullscreen: "",
            ariaHidden: "false",
            tabindex: "0",
            width: "800px",
            height: "350px",
          }}
        ></iframe>
      </div>
          </container>
          <container>
              <div className="map">
        <iframe
          src="https://youtube.com/embed/XsEJqzTycHU?feature=shared"
          title="map"
          style={{
            frameborder: "0",
            allowfullscreen: "",
            ariaHidden: "false",
            tabindex: "0",
            width: "800px",
            height: "350px",
          }}
        ></iframe>
      </div>
          </container>
          </div>

          <div className="blogD-share">
            <div className="bd-tags">
              <div className="bd-main-tag">
                <p className="tag">Tags</p>
              </div>
              <div className="bd-other-tags">
                <p className="one">Kitchen</p>
                <p className="two">Bedroom</p>
              </div>
            </div>
            <div className="bd-smedias">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter./">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-leave-reply">
            <p>Leave a Reply</p>
            <div className="nameEmail">
              <input name="fullname" placeholder="Name" />
              <input name="mail" placeholder="Email" />
            </div>
            <div className="sitePhone">
              <input name="site" placeholder="Subject" />
              <input name="phone" placeholder="Phone" />
            </div>
            <div className="interested">
              <textarea
                name="interested"
                placeholder="Hello, I am interested in.."
              />
            </div>
            <div className="blogD-saving-send">
              <div className="blogD-saving">
                <input type="checkbox" name="remember-mail" />
                <label>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <div className="send">
                <button>
                  Send Now
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blogD-sidebar">
          <div className="search-box">
            <input type="search" name="seacrh" placeholder="Search" />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className="latest-news">
            <h2>Latest News</h2>
            <div className="news">
              <Link to={`/blog-details1`}><p className="news-title">We Focus On Comfort And Gorgeous</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
            <div className="news">
            <Link to={`/blog-details1`}><p className="news-title">We Focus On Comfort And Gorgeous</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
            <div className="news">
            <Link to={`/blog-details`}><p className="news-title">We Focus On Comfort And Gorgeous</p></Link>
              <p className="news-date">28/02/2023</p>
            </div>
          </div>
          <div className="blogD-categories">
            <h2>Categories</h2>
            <ul>
              <ol>Decoration</ol>
              <ol>Door Windows</ol>
              <ol>Home Land</ol>
              <ol>Roof Installation</ol>
            </ul>
          </div>
          <div className="blogD-alltags">
            <h2>Tags</h2>
            <div className="blogD-tags">
              <p
                className="blogD-tag nonselected"
                  onClick={handleChange}
              >
                Kitchen
              </p>
              <p className="blogD-tag nonselected"   onClick={handleChange}
              >Bedroom</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Building</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Architecture</p>
              <p className="blogD-tag nonselected" onClick={handleChange}>Kitchen Planing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
