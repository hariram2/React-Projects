import React from 'react'

export default function Dashboard() {
    const authToken = window.sessionStorage.getItem("AuthToken");
  return (
    <div style={{marginTop:"100px"}}>
        <h2>Dashboard Page</h2>
        <p>Welcome Home</p>
        <p>{authToken}</p>
    </div>
  )
}
