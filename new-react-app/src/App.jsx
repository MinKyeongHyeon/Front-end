import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* 메인 콘텐츠 */}
      <main className="pt-16">
        {" "}
        {/* 네비게이션 바를 위한 패딩 */}
        {/* 히어로 섹션 */}
        <section
          id="home"
          className="bg-gradient-to-br from-blue-50 to-purple-50 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                환영합니다! 🎉
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Tailwind CSS와 React로 만든 현대적이고 반응형인 웹사이트입니다.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                시작하기
              </button>
            </div>
          </div>
        </section>
        {/* 서비스 섹션 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                우리의 서비스
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                현대적인 웹 기술로 최고의 사용자 경험을 제공합니다.
              </p>
            </div>

            {/* 데모 섹션들 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    홈
                  </h3>
                  <p className="text-gray-600">
                    메인 페이지에서 가장 중요한 정보와 핵심 서비스를 소개합니다.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    id="about"
                  >
                    소개
                  </h3>
                  <p className="text-gray-600">
                    우리의 이야기와 비전, 그리고 팀에 대한 자세한 정보를
                    확인하세요.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    id="services"
                  >
                    서비스
                  </h3>
                  <p className="text-gray-600">
                    다양한 웹 개발 서비스와 솔루션을 제공하여 비즈니스 성장을
                    돕습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 포트폴리오 & 연락처 섹션 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div
                id="portfolio"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    포트폴리오
                  </h3>
                  <p className="text-gray-600 mb-6">
                    지금까지 완성한 다양한 프로젝트들과 성과를 살펴보세요. 각
                    프로젝트는 최신 기술과 최적화된 사용자 경험을 바탕으로
                    제작되었습니다.
                  </p>
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    프로젝트 보기
                  </button>
                </div>
              </div>

              <div
                id="contact"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                    연락처
                  </h3>
                  <p className="text-gray-600 mb-6">
                    새로운 프로젝트나 협업에 대해 문의하시거나, 궁금한 점이
                    있으시면 언제든지 연락해 주세요.
                  </p>
                  <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-200">
                    연락하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 기술 소개 섹션 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-2xl text-white">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Tailwind CSS로 만든 현대적인 네비게이션
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/20 p-6 rounded-xl mb-6 backdrop-blur-sm">
                    <span className="text-4xl">📱</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">반응형 디자인</h3>
                  <p className="text-blue-100">
                    모바일, 태블릿, 데스크탑 모든 화면에서 완벽하게 작동하는
                    적응형 레이아웃을 제공합니다.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 p-6 rounded-xl mb-6 backdrop-blur-sm">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    현대적인 스타일
                  </h3>
                  <p className="text-blue-100">
                    Tailwind CSS의 utility-first 접근법으로 깔끔하고 일관성 있는
                    디자인 시스템을 구축했습니다.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 p-6 rounded-xl mb-6 backdrop-blur-sm">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">빠른 개발</h3>
                  <p className="text-blue-100">
                    React Hooks와 Tailwind CSS의 조합으로 신속하고 효율적인 개발
                    프로세스를 실현했습니다.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 새로운 React 프로젝트. Tailwind CSS와 함께 제작되었습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
