import React, { useState, useEffect } from "react";

export interface FilterValues {
  budget: string;
  destination: string;
  departure: string;
  date: string;
}

interface FilterTourProps {
  onFilter: (values: FilterValues) => void;
}

export const FilterTour: React.FC<FilterTourProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<FilterValues>({
    budget: "",
    destination: "",
    departure: "all",
    date: "",
  });

  const handleChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };
  const [active, setActive] = useState(false);
  const handleActive = () =>{
    setActive(true);
  }
  const handleClear = () => {
    setActive(false);
  }
  // gọi callback mỗi khi filter thay đổi
  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  return (
    <div className="px-2 sticky top-20 ">
      <h3 className="text-2xl font-bold mb-4">BỘ LỌC TÌM KIẾM</h3>

      {/* Ngân sách */}
        {active ? (
        <div className="mb--4">
          <label className="flex text-lg font-medium mb-4 justify-between">Ngân sách</label>
          <button onClick={handleClear} className="border rounded-sm text-blue-400 hover:cursor-pointer w-1/4 bg-gray-200 hover:text-red-300">Xóa</button>
          </div>
        ):(
          <div className="mb-4">
          <label className="flex text-lg font-medium mb-4 justify-between">Ngân sách</label>

          <div className="space-y-3 flex flex-col text-gray-500 justify-center items-center ">
          <button onClick={handleActive} className="rounded-lg border w-2/3 p-1 hover:bg-blue-300">
            Dưới 2 triệu
          </button>
          <button className="rounded-lg border w-2/3 p-1 hover:bg-blue-300">
            2 - 5 triệu
          </button>
          <button className="rounded-lg border w-2/3 p-1 hover:bg-blue-300">
           Trên 5 triệu
          </button>
        </div></div>
        )}
        

      {/* Địa điểm đến */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Địa điểm đến</label>
        <input
          type="text"
          placeholder="Nhập địa điểm..."
          value={filters.destination}
          onChange={(e) => handleChange("destination", e.target.value)}
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Điểm khởi hành */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Điểm khởi hành</label>
        <select
          value={filters.departure}
          onChange={(e) => handleChange("departure", e.target.value)}
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="all">Tất cả</option>
          <option value="hcm">TP.HCM</option>
          <option value="hanoi">Hà Nội</option>
          <option value="danang">Đà Nẵng</option>
          <option value="hue">Huế</option>
        </select>
      </div>

      {/* Ngày đi */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Ngày đi</label>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => handleChange("date", e.target.value)}
          className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Áp dụng
      </button>
    </div>
  );
};
