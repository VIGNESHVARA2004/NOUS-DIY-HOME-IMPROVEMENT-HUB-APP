import "./blog.css";
import latestNews from "./blogLatest.jpg";
import article1 from "./article1.jpg";
import article2 from "./blogContent.jpg";
import article3 from "./blogContent5.jpg";
import article4 from "./blogContent6.jpg";
import article5 from "./blogContent8.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Blog() {
  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notaken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
      e.target.classList.remove("notaken");
      e.target.classList.add("taken");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
    }
  };
  return (
    <div className="blog">
      <div className="blog-header">
          Articles & News
      </div>

      <div className="latestNews">
        <h2 className="Latest-Post">Latest Post</h2>
        <div className="lNews">
          <div className="ln-img">
            <img src={latestNews} alt="news"></img>
          </div>
          <div className="ln-text">
            <div className="ln-subtext">
              <h2>Low Cost Latest Invented Interior Designing Ideas</h2>
              <p>
              It's very important to have a good team
            
                <br />
                <br />
                Contrary to popular belief. Lorem Ipsum is not simply random
                text. It has roots in a piece of classica.
              </p>
            </div>
            <div className="ln-detail">
              <p className="ac-date">3 March 2023</p>
              <Link to={`/blog-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogArticles">
        <h1 className="Latest-Post">Articles & News</h1>
        <div className="blog-art-list">
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details1`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article2} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Wall Scones Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={"/blog-details2"}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article3} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Terracotta Pots Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details3`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article4} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Terracotta Pots Painting Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={"/blog-details4"}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article5} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Custom Wall Art Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details5`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article3} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
