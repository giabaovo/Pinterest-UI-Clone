export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cài đặt</h1>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold mb-4">Tài khoản</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Chỉnh sửa hồ sơ
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Quản lý tài khoản
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Hiển thị hồ sơ
              </button>
            </div>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold mb-4">Quyền riêng tư và dữ liệu</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Quyền riêng tư
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Bảo mật
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Thông báo</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Cài đặt thông báo
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
                Email và thông báo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
