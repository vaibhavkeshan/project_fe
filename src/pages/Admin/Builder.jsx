import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { IoIosCloudDownload } from "react-icons/io";
import { MdDriveFolderUpload } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../../context/MyContext";
import Loader from "../../components/Loader";
import useModal from "../../components/hooks/useModel";
import InstructionUpdateMindAr from "../../components/model/InstructionUpdateMindAr";

const Builder = () => {
  const {
    isApproved,
    isUpload,
    projectBuild,
    buildProject,
    isBuild,
    updateProject,
    isUpdate,
  } = useContext(UserContext);
  const { open, handleOpen, handleClose } = useModal();
  const [Target, setTarget] = useState("");
  useEffect(() => {
    const fetchBuildProject = async () => {
      await projectBuild();
    };
    fetchBuildProject();
  }, [isUpload, isUpdate]);

  const handleTarget = async (e, id) => {
    const file = e.target.files[0];
    console.log("working");
    console.log(file);
    setTarget(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      await updateProject(formData, id);
    }
  };
  const downloadImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const extension = imageUrl.split(".").pop();
      const filename = `goodspeeed-${Date.now()}.${extension}`;
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      <div>
        {(isBuild || isApproved) && <Loader />}
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 m-0 p-0">
              <AdminSidebar />
            </div>
            <div className="col-11 m-0 p-0  ">
              {/* Your table  */}
              <div className="row my-2">
                <div className="commonGraphStyle p-2">
                  <h3>Build Request</h3>
                </div>
              </div>
              <div className="row">
                <div className="commonGraphStyle p-2 builderMindArUpload">
                  <div className="tableSetBuilder">
                    <table class="table" id="builderTable">
                      <thead class="table-dark">
                        <tr>
                          <th scope="col">Serial no.</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Project Name</th>
                          <th scope="col">Download</th>
                          <th scope="col">Target</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {buildProject?.map((t, i) => (
                          <tr
                            key={t?._id}
                            style={{
                              textDecoration:
                                t?.status === "approved"
                                  ? "line-through"
                                  : "none",
                            }}
                          >
                            <th scope="row">{i + 1}</th>
                            <td>{t?.user?.name}s</td>
                            <td>{t?.user?.email}</td>
                            <td>{t?.artWorkName}</td>
                            <td>
                              <div className="custom-download-icon">
                                <IoIosCloudDownload
                                  fontSize={25}
                                  onClick={() => downloadImage(t?.target?.url)}
                                />
                              </div>
                            </td>
                            <td>
                              {/* <MdDriveFolderUpload
                            fontSize={25}
                            onClick={() => handleClick()}
                          /> */}
                              <input
                                type="file"
                                accept="image/mind"
                                multiple={false}
                                id={`fileInput-${i}`}
                                // ref={fileInputRef}
                                onChange={(e) => handleTarget(e, t?._id)}
                                style={{ display: "none" }}
                              />
                              <label
                                htmlFor={`fileInput-${i}`}
                                className="custom-file-upload"
                              >
                                <MdDriveFolderUpload fontSize={25} />
                              </label>
                            </td>
                            <td>
                              {t?.status === "approved" ? (
                                <button className="btn btn-success">
                                  Approved
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Pending
                                </button>
                              )}
                            </td>
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
      </div>
      <InstructionUpdateMindAr open={open} handleClose={handleClose} />
    </>
  );
};

export default Builder;
