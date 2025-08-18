// src/components/pages/Tours/FilterTour.tsx
export const FilterTour = () => {
  return (
    <div className="p-4 border-r w-64">
      <h3 className="text-lg font-bold">Bộ lọc tour</h3>
      {/* thêm input, select,... ở đây */}
      <div>
        <label className="block text-sm">Địa điểm</label>
        <input
          type="text"
          placeholder="Nhập địa điểm..."
          className="border rounded p-1 w-full"
        />
      </div>
    </div>
  );
};
