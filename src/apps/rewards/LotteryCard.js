/**Lottery Card  */
import { getFormattedDate } from "../../utils/BaseUtils";
import ContentUnavailable from "../components/ContentUnavailable";

const LotteryCard = () => {
  /**Daisy UI & Tailwind CSS Lottery Card */
  const lottery = null;
  return (
    <>
      <div className="row justify-content-center align-items-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3" id="${lottery.slug}">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <img
                    src="https://picsum.photos/512/512"
                    className="card-img img-fluid h-100 object-fit-cover"
                    alt="lootery-picture"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 capitalize">
                  <h5>${lottery.title}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <i className="fa fa-users-viewfinder me-1"></i>$
                      {lottery.buyer_count < 5
                        ? "New Purchase Now!"
                        : `<span className="text-dark">
                                         ${lottery.buyer_count}
                                       </span> Already Purchased`}
                    </div>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>${lottery.winning}$ Winning</span>
                    <span className="text-primary"> • </span>
                    <span>${lottery.total_draw} Draw</span>
                    <span className="text-primary"> • </span>
                    <span>
                      ${getFormattedDate(lottery.expiry_date)} Draw Date
                    </span>
                  </div>
                  <p className="text-truncate mb-3">${lottery.description}</p>
                  <div>
                    <a
                      role="button"
                      href="${`/demo/profile/${lottery.vendor.username}/`}"
                      className="border text-decoration-none rounded p-2 toast-header"
                    >
                      <img
                        src="https://picsum.photos/512/512"
                        className="rounded-circle object-fit-cover me-2"
                        height="32"
                        width="32"
                      />
                      <strong className="me-auto">
                        ${lottery.vendor.username}
                      </strong>
                      <small>11 mins ago</small>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 overflow-hidden me-1">
                      $${lottery.price}
                    </h4>
                  </div>
                  <marquee className="text-primary" direction="right">
                    ${"Lottery ".repeat(10)}
                  </marquee>
                  <marquee className="text-danger" direction="left">
                    ${"Lottery ".repeat(10)}
                  </marquee>
                  <marquee className="text-success" direction="right">
                    ${"Lottery ".repeat(10)}
                  </marquee>
                  <div className="d-flex flex-column mt-4">
                    <a
                      className="btn btn-primary lottery-detail btn-sm mb-3"
                      type="button"
                      href="/demo/lottery/${
                                      lottery.slug
                                    }"
                    >
                      Details
                    </a>
                    <a
                      className="btn btn-outline-primary lottery-purchase btn-sm"
                      href="/demo/purchase/${
                                  lottery.slug
                                }"
                      type="button"
                      href="/demo/purchase/${
      lottery.slug
    }"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LotteryCard;
