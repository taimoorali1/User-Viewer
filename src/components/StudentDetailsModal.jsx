import React from 'react';
import { Modal } from 'antd';
import "../App.css";

export const StudentDetailsModal = ({ student, visible, onClose }) => {
  if (!student) return null;

  return (
    <Modal visible={visible} title="Student Details" onCancel={onClose} footer={null}>
      <p><span className="modal-label">Name:</span> {student.firstName} {student.lastName}</p>
      <p><span className="modal-label">Age:</span> {student.age}</p>
      <p><span className="modal-label">Email:</span> {student.email}</p>
      <p><span className="modal-label">Phone:</span> {student.phone}</p>
      <p><span className="modal-label">Grade:</span> {student.grade}</p>
      <p><span className="modal-label">Country:</span> {student.address.country}</p>
    </Modal>
  );
};
