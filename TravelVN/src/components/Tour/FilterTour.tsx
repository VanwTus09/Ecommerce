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

  // Xử lý chọn budget
  const handleBudgetSelect = (budget: string) => {
    setFilters((prev) => ({
      ...prev,
      budget, // cập nhật budget
    }));
  };

  // Clear filter
  const handleClear = () => {
    setFilters({
      budget: "",
      destination: "",
      departure: "all",
      date: "",
    });
    onFilter({
      budget: "",
      destination: "",
      departure: "all",
      date: "",
    }); // reset luôn
  };
  const applyFilters = () => {
    onFilter(filters);
  };

  // gọi callback mỗi khi filter thay đổi
  useEffect(() => {
    if (filters.budget || filters.destination) onFilter(filters);
  }, [filters, onFilter]);

  return (
    <div className="px-2 sticky top-20">
      <h3 className="text-2xl font-bold mb-4">BỘ LỌC TÌM KIẾM</h3>

      {/* Ngân sách */}
      <div className="mb-4">
        <label className="flex text-lg font-medium mb-4 justify-between">
          Ngân sách
          {filters.budget && (
            <button
              onClick={handleClear}
              className="border rounded-sm text-blue-400 hover:cursor-pointer px-2 bg-gray-200 hover:text-red-500"
            >
              Xóa
            </button>
          )}
        </label>

        <div className="space-y-3 flex flex-col text-gray-500 justify-center items-center">
          <button
            onClick={() => handleBudgetSelect("under-2m")}
            className={`rounded-lg border w-2/3 p-1 ${
              filters.budget === "under-2m"
                ? "bg-blue-400 text-white"
                : "hover:bg-blue-300"
            }`}
          >
            Dưới 2 triệu
          </button>
          <button
            onClick={() => handleBudgetSelect("2-5m")}
            className={`rounded-lg border w-2/3 p-1 ${
              filters.budget === "2-5m"
                ? "bg-blue-400 text-white"
                : "hover:bg-blue-300"
            }`}
          >
            2 - 5 triệu
          </button>
          <button
            onClick={() => handleBudgetSelect("over-5m")}
            className={`rounded-lg border w-2/3 p-1 ${
              filters.budget === "over-5m"
                ? "bg-blue-400 text-white"
                : "hover:bg-blue-300"
            }`}
          >
            Trên 5 triệu
          </button>
        </div>
      </div>

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
          <option value="TP.HCM">TP.HCM</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Đà Nẵng">Đà Nẵng</option>
          <option value="Huế">Huế</option>
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
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-1 rounded w-full hover:bg-blue-600"
      >
        Áp dụng
      </button>
    </div>
  );
};
