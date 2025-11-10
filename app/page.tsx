export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center space-y-8">
          {/* Icon/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Live & Running
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Next.js Application
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Successfully deployed on <span className="font-semibold text-indigo-600 dark:text-indigo-400">AWS EC2</span> using <span className="font-semibold text-indigo-600 dark:text-indigo-400">GitHub Actions</span>
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Fast</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Optimized performance</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">CI/CD</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automated deployment</p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-2">☁️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Cloud</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hosted on AWS EC2</p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with Next.js • Deployed with Jenkins Pipeline
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
