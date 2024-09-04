import React, { useState } from "react";
import { Card, Button } from "antd";
import { StudentDetailsModal } from "./StudentDetailsModal";

export const TileView = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDetails = (student) => {
    setSelectedStudent(student);
    setIsModalVisible(true);
  };

  const hideDetails = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {students?.map((student) => (
        <Card
          key={student.id}
          title={student.name}
          style={{ width: 240, margin: 16 }}
        >
          <p>Grade: {student.grade}</p>
          <Button onClick={() => showDetails(student)}>View Details</Button>
        </Card>
      ))}
      <StudentDetailsModal
        student={selectedStudent}
        visible={isModalVisible}
        onClose={hideDetails}
      />
    </div>
  );
};
