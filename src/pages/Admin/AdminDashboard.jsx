import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { UserContext } from "../../context/MyContext";
import Loader from "../../components/Loader";
import { FaUser } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "No Of Project create Per Month",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Project",
      data: [10, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: "grey",
      backgroundColor: "black",
      tension: 0.1,
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => {
    //     return Math.floor(Math.random() * (1000 - -1000 + 1)) + -1000;
    //   }),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};
const optionsPie = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Status of Project",
    },
  },
};
const dataStatus = {
  labels: ["Build", "Pending", "Approved", "Reject"],
  datasets: [
    {
      label: "Project",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const optionsUser = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "User Type",
    },
  },
};
const dataUser = {
  labels: ["Premium", "Free"],
  datasets: [
    {
      label: "User",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const optionsProject = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "No 0f Project",
    },
  },
};
const dataProject = {
  labels: ["Project"],

  datasets: [
    {
      label: "Project",
      data: [12],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const optionsTarget = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total MindAr",
    },
  },
};
const dataTarget = {
  labels: ["created", "Not Created"],
  datasets: [
    {
      label: "MindAr",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const optionsCallBack = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Call Back Request",
    },
  },
};
const dataCallBack = {
  labels: ["Call"],

  datasets: [
    {
      label: "Request",
      data: [12],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};
const AdminDashboard = () => {
  const { fetchProjectByAdmin, isAllUser, totalUser, totalProject, user } =
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
          <div className="col-2 m-0 p-0">
            <AdminSidebar />
          </div>
          <div className="col-10">
            <div className="row mt-2 ">
              <div className="col">
                <div className="  commonGraphStyle p-3 d-flex  justify-content-between align-items-center">
                  <h5>
                    <b>{user?.name}</b>
                  </h5>
                  <p>{user?.email}</p>
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="row up my-2">
                <div className="col-md-8">
                  <div className="day_vs_project commonGraphStyle p-2">
                    <Line options={options} data={data} />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="project_status commonGraphStyle p-2">
                    <Pie data={dataStatus} options={optionsPie} />;
                  </div>
                </div>
              </div>
              <div className="row up my-2">
                <div className="col-md-3">
                  <div className="project_status commonGraphStyle p-2">
                    <Doughnut data={dataUser} options={optionsUser} />;
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project_status commonGraphStyle p-2">
                    <Doughnut data={dataProject} options={optionsProject} />;
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project_status commonGraphStyle p-2">
                    <Doughnut data={dataTarget} options={optionsTarget} />;
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project_status commonGraphStyle p-2">
                    <Doughnut data={dataCallBack} options={optionsCallBack} />;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
