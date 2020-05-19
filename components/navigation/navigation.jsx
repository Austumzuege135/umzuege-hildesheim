import Link from "next/link";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = ({ navLinks }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo-small">
          <Link href="/">
            <a title="Startseite">
              <img src="/static/img/logo.jpg" className="logo-small" />
            </a>
          </Link>
        </div>
        <ul className={navOpen ? "active" : ""}>
          <div className="logo-big">
            <Link href="/">
              <a title="Startseite">
                <img src="/static/img/logo.jpg" className="logo-big" />
              </a>
            </Link>
          </div>
          <figure
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <RiMenu4Line fontSize="40px" />
          </figure>

          {navLinks.map((Links) => (
            <li>
              <Link href={Links.path} key={Links.key}>
                <a
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  {Links.text}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/kostenloses-angebot">
              <a
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="button"
              >
                Kostenloses Angebot
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`

      .holder {
          background: white;
          position: fixed;
          height: 100px;
          top: 0px;
      }

        .logo-big {
            width 100px;
        }
        .logo-small {
            width 80px;
            margin: 0px auto;
            display: none;
        }
        nav {
          background: white;
          height: auto;
          width: 100%;
          position: fixed;
          top: 0px;
          padding: 5px 0;
          z-index: 999;
        }



        nav ul {
          background: white;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-margin-before: 0;
          margin-block-start: 0;
          -webkit-margin-after: 0;
          margin-block-end: 0;
          -webkit-padding-start: 0;
          padding-inline-start: 0;
          height: 100%;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
            max-width: 1040px;
            margin: 0 auto;
        }

        nav ul figure {
          display: none;
          cursor: pointer;
          padding-top: 10px;
        }

        nav ul li {
          list-style-type: none;
          padding: 10px 20px;
        }

        nav ul li .active {
          background: #999;
        }

        nav ul .button {
            padding: 20px 20px;
            background-color: #76282e;
            color: white;
            border-radius: 20px;
            width: auto;

          }

        nav ul a {
          color: black;
          text-decoration: none;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: reverse;
          -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }

        nav ul i {
          margin-right: 5px;
          font-size: 20px;
        }

        @media screen and (max-width: 759px) {

            .logo-small {
                width 80px;
                margin: 0px auto;
                display: block;
            }

        nav {
            background: white;
            height: 80px;
        }

        .logo-big {
            display: none;
        }
          nav ul figure {
            display: block;
            cursor: pointer;
          }
          nav ul {
            height: 100%;
            width: 300px;
            left: -300px;
            position: fixed;
            top: 90px;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-transition: 300ms ease all;
            transition: 300ms ease all;
          }
          nav ul.active {
            left: 0px;
          }
          nav ul figure {
            -webkit-margin-start: 2px;
            margin-inline-start: 2px;
            position: fixed;
            left: 9px;
            top: 10px;
          }
          nav ul li {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
          }
          nav ul a {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-left: 20px;
            margin-right: 16px;
          }
        }

      `}</style>
    </div>
  );
};

export default Navbar;
