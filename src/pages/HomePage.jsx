import React, { useState, useEffect } from "react";
import GridView from "../components/GridView";
import { TileView } from "../components/TileView";
import { getUsers } from "../api/userApi";
import { Button } from "antd";

export const HomePage = () => {
  const [view, setView] = useState("grid");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      // console.log(data, "data innnnnnnnn");
      setStudents(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Button onClick={() => setView(view === "grid" ? "tile" : "grid")}>
        Toggle View
      </Button>
      {view === "grid" ? <GridView /> : <TileView students={students} />}
    </div>
  );
};
