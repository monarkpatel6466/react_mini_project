import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function UserDetail() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [id]);

  if (!userData) {
    return (
      <div className="users-page">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>User Detail page</h1>
        <p style={{ textAlign: "center" }}>
          Used Free Fake REST API for Placeholder JSON Data
        </p>
        <div style={{ textAlign: "center" }}>
          <Link className="primary-btn" to="/feature/users">
            Back to users list
          </Link>
        </div>
        <br />
        <br />
        <div className="user-detail" style={{ textAlign: "center" }}>
            <img src={userData.image} alt={userData.firstName} />
            <h2>{userData.firstName} {userData.lastName}</h2>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Address:</strong> {userData.address.address}</p>
        </div>
      </div>
    </div>
  );
}
