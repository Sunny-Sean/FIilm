import { useEffect, useRef, useState } from "react";

const key = "5a105c63";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // Tim nap ung dung, chay SAU KHI thanh phan hien thi tren man hinh, [] lam doi so thu 2 => chi hien thi lan dau tien sau khi ket xuat
  useEffect(
    function () {
      //   callback?.();
      // AbortController là một đối tượng được cung cấp trong trình duyệt và được sử dụng để quản lý các tác vụ (tasks) có thể bị hủy (abort)
      // có thể sử dụng nó để tạo một tín hiệu hủy (abort signal), và sau đó có thể sử dụng tín hiệu hủy này để hủy bất kỳ tác vụ nào muốn
      // khi chúng đang thực hiện. Điều này có ích trong việc quản lý và kiểm soát các tác vụ không đồng bộ trong ứng dụng web.
      const controller = new AbortController();

      async function fetchMovie() {
        try {
          setIsLoading(true);
          // Thiet lap lai trang thai lỗi mỗi khi tìm kiếm
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,

            // Ket noi controller voi yeu cau tìm nạp phim
            { signal: controller.signal }
          );
          // Xu li khi gap loi
          if (!res.ok) throw new Error("Some thing went wrong");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortErr") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      // Khi tim phim moi se dong bo phim dang mo
      //   handleCloseMovie();
      fetchMovie();

      return function () {
        controller.abort();
      };
    },
    // Thực hiện tìm kiếm lại (gửi 1 yêu cầu api mới ) mỗi lần query thay đổi trạng thái
    [query]
  );
  return { movies, isLoading, error };
}
