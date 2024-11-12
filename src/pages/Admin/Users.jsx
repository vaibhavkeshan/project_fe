import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { UserContext } from "../../context/MyContext";
import Loader from "../../components/Loader";
import { FaUser } from "react-icons/fa";
const Users = () => {
  const { fetchUser, isAllUser, totalUser } = useContext(UserContext);

  useEffect(() => {
    const fetchAllUser = async () => {
      await fetchUser();
    };
    fetchAllUser();
  }, []);
  return (
    <div>
      {isAllUser && <Loader />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 m-0 p-0">
            <AdminSidebar />
          </div>
          <div className="col-11 m-0 p-0  ">
            <div className="row my-2">
              <div className="commonGraphStyle p-2">
                <h3>All User</h3>
              </div>
            </div>
            <div className="row">
              <div className="commonGraphStyle">
                <table class="table ">
                  <thead>
                    <tr>
                      <th scope="col">
                        Serial <br /> No.
                      </th>
                      <th scope="col">Name</th>
                      <th scope="col">Profile</th>
                      <th scope="col">Email</th>
                      <th scope="col">Subscription</th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalUser?.map((u, i) => (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{u?.name}</td>
                        <td>
                          {u?.avatar?.public_id ? (
                            <img
                              src={u?.avatar?.url}
                              alt="user"
                              height="30"
                              width="30"
                              style={{ borderRadius: "50%" }}
                            />
                          ) : (
                            <FaUser fontSize={30} />
                          )}
                        </td>
                        <td>{u?.email}</td>
                        <td>{u?.subscription?.id ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
