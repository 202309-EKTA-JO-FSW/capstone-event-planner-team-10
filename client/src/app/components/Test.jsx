"use client";
import React, { useEffect, useState } from "react";

const Hello = () => {
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/admin/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setTestResult(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setTestResult("Error fetching data");
      });
  }, []);

  return <div>{testResult}</div>;
};

export default Hello;
