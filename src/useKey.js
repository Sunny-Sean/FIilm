import { useEffect } from "react";

export function useKey(key, action) {
  // Thoat khoi phim dang chon = esc khi co phim duoc chon, khong co thi khong thuc hien
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      // Sau khi nhan esc thoat khoi chi tiet phim (ngat ket noi), se xoa trinh xu li su kien cu, tranh viec cong don
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
