// src/components/pages/Tours/FilterTour.tsx
export const FilterTour = () => {
  return (
    <div className="px-2">
      <h3 className="text-lg font-bold mb-4">BỘ LỌC TÌM KIẾM</h3>

      {/* Ngân sách */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ngân sách</label>
        <div className="space-y-1">
          <label className="flex items-center space-x-2">
            <input type="radio" name="budget" value="<2m" className="text-blue-600" />
            <span>Dưới 2 triệu</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="budget" value="2-5m" className="text-blue-600" />
            <span>2 - 5 triệu</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="budget" value=">5m" className="text-blue-600" />
            <span>Trên 5 triệu</span>
          </label>
        </div>
      </div>

      {/* Địa điểm đến */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Địa điểm đến</label>
        <input
          type="text"
          placeholder="Nhập địa điểm..."
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Điểm khởi hành */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Điểm khởi hành</label>
        <select className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none">
          <option value="all">Tất cả</option>
          <option value="hcm">TP.HCM</option>
          <option value="hanoi">Hà Nội</option>
          <option value="danang">Đà Nẵng</option>
          <option value="hue">Huế</option>

        </select>
      </div>

      {/* Ngày đi */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Ngày đi</label>
        <input
          type="date"
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Nút áp dụng */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Áp dụng
      </button>
    </div>
  );
};
