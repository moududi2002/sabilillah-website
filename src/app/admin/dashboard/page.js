"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalPages: 0,
    recentUpdates: []
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    
    if (!token || !userData) {
      router.push('/admin/login');
      return;
    }

    try {
      // ✅ Verify token with your backend
      const response = await fetch('http://72.60.41.54:3010/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        fetchDashboardData(token);
      } else {
        throw new Error('Invalid token');
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      router.push('/admin/login');
    }
  };

  const fetchDashboardData = async (token) => {
    try {
      // ✅ Fetch real stats from your backend
      const statsResponse = await fetch('http://72.60.41.54:3010/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const statsData = await statsResponse.json();

      if (statsData.success) {
        setStats(statsData.data);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading Dashboard...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Sabilillah Foundation Content Management</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Total Pages</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalPages}</p>
            <p className="text-sm text-gray-500">Managed pages</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Admin Role</h3>
            <p className="text-3xl font-bold text-green-600">Super</p>
            <p className="text-sm text-gray-500">Full access</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Last Login</h3>
            <p className="text-3xl font-bold text-purple-600">Now</p>
            <p className="text-sm text-gray-500">Active session</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">Recent Page Updates</h2>
          </div>
          <div className="p-6">
            {stats.recentUpdates && stats.recentUpdates.length > 0 ? (
              <div className="space-y-4">
                {stats.recentUpdates.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium capitalize">{page.pageName}</p>
                      <p className="text-sm text-gray-500">
                        Updated by: {page.lastUpdatedBy?.name || 'Admin'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(page.updatedAt).toLocaleString()}
                      </p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      Updated
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No recent updates. Start managing your content!
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}