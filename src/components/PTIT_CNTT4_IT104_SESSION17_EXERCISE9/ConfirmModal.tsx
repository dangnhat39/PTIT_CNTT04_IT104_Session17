import React from "react";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <div>
      <p>Bạn có chắc chắn muốn xóa?</p>
      <button onClick={onConfirm}>Đồng ý</button>
      <button onClick={onCancel}>Hủy</button>
    </div>
  );
}