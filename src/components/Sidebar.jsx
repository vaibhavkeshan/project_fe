import React from "react";
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return       <div className="text-center">
  <div className="list-group my-5">
    <h4 className="mainHeading px-2 mx-5 w-50">My profile</h4>
    <MenuItem className="menoptions my-2 mx-5 w-50" onClick={()=>navigate("/dashboard")}>Dashboard</MenuItem>
    <MenuItem className="menoptions my-2 mx-5 w-50" onClick={()=>navigate("/profilesetting")}>Profile Settings</MenuItem>
    <MenuItem className="menoptions my-2 mx-5 w-50">Invoices</MenuItem>
    <MenuItem className="menoptions my-2 mx-5 w-50">Billing Address</MenuItem>
    <MenuItem className="menoptions my-2 mx-5 w-50">Payment Settings</MenuItem>
    <MenuItem className="menoptions my-2 mx-5 w-50">Privacy Settings</MenuItem>
    <MenuItem className="menoptions my-2 mx-5 w-50">Delete Account</MenuItem>
  </div>
</div>
};

export default Sidebar;
