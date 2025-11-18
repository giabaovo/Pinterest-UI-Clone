export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
          <h1 className="text-3xl font-bold mb-2">Hồ sơ của bạn</h1>
          <p className="text-gray-600 mb-4">@username</p>
          <button className="px-6 py-2 bg-gray-200 rounded-full font-semibold hover:bg-gray-300 transition-colors">
            Chỉnh sửa hồ sơ
          </button>
        </div>
        
        <div className="mt-8">
          <div className="border-b border-gray-200">
            <nav className="flex justify-center gap-8">
              <button className="py-4 border-b-2 border-black font-semibold">Đã tạo</button>
              <button className="py-4 text-gray-600 font-semibold hover:text-black">Đã lưu</button>
            </nav>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-600">Chưa có ghim nào</p>
          </div>
        </div>
      </div>
    </div>
  );
}
