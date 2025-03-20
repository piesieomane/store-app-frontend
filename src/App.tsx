import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Store, Search, LogOut } from "lucide-react";
import { ProductGrid } from "./components/ProductGrid";
import { LoginForm } from "./components/LoginForm";
import { useAuthStore } from "./store/useAuthStore";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5, // 5 minutes
//       retry: 1,
//     },
//   },
// });

function App() {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Store className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                E-Commerce Store
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{user?.email}</span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
