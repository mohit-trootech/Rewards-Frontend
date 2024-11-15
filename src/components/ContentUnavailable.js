/**Component to Show that Requested Content is Unavailable */
import { FaUserCircle, FaWifi, FaServer, FaHome } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
const ContentUnavailable = ({ content }) => {
  /**Daisy UI Content Unavailable Template */
  return (
    <>
      <section className="bg-base-200">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-error">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
              {content} Page not found
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn't exist. Here are some
              possible reasons:
            </p>
            <ul className="menu w-full">
              <li>
                <span>
                  <FaServer className="h-5 w-5" />
                  Requested Service is Unavailable.
                </span>
              </li>
              <li>
                <span>
                  <FaWifi className="h-5 w-5" />
                  Check Your Internet Connection.
                </span>
              </li>
              <li>
                <span>
                  <FaUserCircle className="w-5 h-5" />
                  Contact Support if the problem persists.
                </span>
              </li>
            </ul>

            <div className="flex items-center mt-6 gap-x-3">
              <button className="btn border border-gray-500">
                <FaHome className="w-5 h-5" />
                <span>Go Home</span>
              </button>

              <button className="btn btn-primary">
                <RiLoginBoxLine className="w-5 h-5" />
                Login
              </button>
            </div>
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src="https://picsum.photos/1024/1024"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentUnavailable;
