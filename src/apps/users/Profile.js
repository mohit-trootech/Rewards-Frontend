/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/**Profile Page*/
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Contexts";
import { BsMapFill } from "react-icons/bs";
import UpdateProfile from "./UpdateProfile";
import profile from "../../static/img/profile.jpg";
import ContentUnavailable from "../../components/ContentUnavailable";
import { FiUsers } from "react-icons/fi";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
function Profile() {
  /**Profile Page */
  const { user, fetchUserHandle } = useContext(UserContext);
  useEffect(() => {
    fetchUserHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);
  return (
    <>
      {user ? (
        <div>
          <div className="hero lg:min-h-screen bg-base-200 lg:py-9 h-auto">
            <div className="flex items-center max-w-4xl flex-wrap mx-auto my-10 lg:my-0">
              <div
                id="profile"
                className="w-full lg:w-3/5 rounded-lg lg:rounded-lg shadow-2xl border bg-base-100  mx-6 lg:mx-0"
              >
                <div className="p-4 md:p-12 text-center lg:text-left">
                  <div className="card card-side bg-base-200 shadow-xl">
                    <div className="card-body">
                      <p class="mt-4 flex flex-col gap-5 items-center justify-center lg:justify-start md:items-start">
                        <p className="card-title capitalize text-center">
                          {user.first_name
                            ? user.first_name + " " + user.last_name
                            : user.username}
                        </p>
                        <p className="flex items-center justify-start">
                          <span className="h-4 fill-current text-green-700 pr-4">
                            <BsMapFill />
                          </span>
                          {user.address || (
                            <span className="text-warning">Update Address</span>
                          )}
                        </p>
                      </p>
                      {/* User Information */}
                      <ul className="menu bg-base-300 rounded-box">
                        <li>
                          <span>
                            <FaUserCircle />
                            Age:
                            <span className="badge badge-sm badge-info">
                              {(user.age && user.age + " Years Old") || "?"}
                            </span>
                          </span>
                        </li>
                        <li>
                          <span>
                            <FiUsers />
                            Gender
                            <span className="badge badge-sm badge-info capitalize">
                              {user.gender || "?"}
                            </span>
                          </span>
                        </li>
                        <li>
                          <a>
                            Verified
                            <span className="badge badge-xs badge-info">
                              {user.is_verified ? (
                                <FaCheck className="h-4 w-4" />
                              ) : (
                                <FaXmark className="h-4 w-4" />
                              )}
                            </span>
                          </a>
                        </li>
                      </ul>
                      {/* User Joining Information */}
                      <div className="pt-5 flex md:flex-row flex-col gap-4 justify-center items-center">
                        <button className="btn btn-sm bg-base-300">
                          Date Joined
                          <div className="badge badge-sm badge-secondary">
                            {new Date(user.date_joined).toString().slice(4, 15)}
                          </div>
                        </button>
                        <button className="btn btn-sm bg-base-300">
                          Last Login
                          <div className="badge badge-sm badge-secondary">
                            {new Date(user.last_login).toString().slice(4, 15)}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* User Wallet Information */}
                  <div className="stats my-9 w-full bg-primary text-primary-content">
                    <div className="stat">
                      <div className="stat-title text-gray-900">
                        Wallet balance
                      </div>
                      <div className="stat-value">$ {user.wallet.balance}</div>
                      <div className="stat-actions">
                        <button className="btn btn-sm btn-success">
                          Add funds
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                    <button
                      className="btn-primary btn"
                      onClick={() =>
                        document.getElementById("update_profile").showModal()
                      }
                    >
                      Update Profile
                    </button>
                    <button
                      className="btn-secondary btn"
                      onClick={() =>
                        document.getElementById("update_email").showModal()
                      }
                    >
                      Update Email Address
                    </button>
                    <button
                      className="btn-warning btn"
                      onClick={() =>
                        document.getElementById("verify_email").showModal()
                      }
                    >
                      Verify Email
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/5">
                <img
                  src={profile}
                  alt="profile"
                  className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                />
              </div>
            </div>
          </div>
          <UpdateProfile user={user} />
        </div>
      ) : (
        <ContentUnavailable content="Profile" />
      )}
    </>
  );
}

export default Profile;
