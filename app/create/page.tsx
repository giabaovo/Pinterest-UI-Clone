export default function CreatePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Tạo Ghim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="font-semibold mb-2">Chọn tệp</p>
            <p className="text-sm text-gray-600">Hoặc kéo và thả tệp vào đây</p>
          </div>
          
          <div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Tiêu đề</label>
              <input 
                type="text" 
                placeholder="Thêm tiêu đề"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block font-semibold mb-2">Mô tả</label>
              <textarea 
                placeholder="Thêm mô tả chi tiết"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors">
              Xuất bản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
