import React from 'react';
import Popconfirm from '@pam/components/Feedback/Popconfirm';
import Button from '@pam/components/uielements/button';
import { notification } from '@pam/components';

export default function({ handleDelete }) {
  return (
    <Popconfirm
      title="Sure to delete the event?"
      okText="DELETE"
      cancelText="No"
      onConfirm={() => {
        notification('error', 'Deleted', '');
        handleDelete();
      }}
    >
      <Button icon="close" type="default" className="isoDeleteBtn" />
    </Popconfirm>
  );
}
