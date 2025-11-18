export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Tin nhắn</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
          {/* Conversations List */}
          <div className="border-r border-gray-200 pr-4">
            <div className="text-center py-12">
              <p className="text-gray-600">Chưa có tin nhắn</p>
            </div>
          </div>
          
          {/* Message Area */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Tin nhắn của bạn</h2>
              <p className="text-gray-600">Gửi tin nhắn riêng tư cho bạn bè</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
