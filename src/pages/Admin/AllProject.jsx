import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { UserContext } from "../../context/MyContext";
import Loader from "../../components/Loader";
import { FaUser } from "react-icons/fa";
const AllProject = () => {
  const { fetchProjectByAdmin, isAllUser, totalUser, totalProject } =
    useContext(UserContext);

  useEffect(() => {
    const fetchAllProject = async () => {
      await fetchProjectByAdmin();
    };
    fetchAllProject();
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
                <h3>All Project</h3>
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
                      <th scope="col">Artwork Name</th>
                      <th scope="col">Build Request</th>
                      <th scope="col">status</th>
                      <th scope="col">Profile</th>
                      <th scope="col">
                        MindAr <br /> Upload
                      </th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalProject?.map((u, i) => (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{u?.artWorkName}</td>

                        <td>{u?.builder ? "Yes" : "No"}</td>
                        <td>{u?.status}</td>
                        <td>
                          {u?.user?.avatar?.public_id ? (
                            <img
                              src={u?.user?.avatar?.url}
                              alt="user"
                              height="30"
                              width="30"
                              style={{ borderRadius: "50%" }}
                            />
                          ) : (
                            <FaUser fontSize={30} />
                          )}
                        </td>
                        <td>{u?.mindArUpload ? "Uploaded" : "Not Uploaded"}</td>

                        <td>{u?.user?.email}</td>
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

export default AllProject;
