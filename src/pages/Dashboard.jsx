import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>This is the dashboard.</p>

      <Link to="/posts" className="button">
        View Posts
      </Link>
    </section>
  );
};

export default Dashboard;
