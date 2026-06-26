import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [participants, setParticipants] = useState([]);
  const [stats, setStats] = useState({ totalParticipants: 0, totalDistance: 0, citiesParticipating: 0 });

  useEffect(() => {
    // In a real app, you would fetch this from your protected API endpoints
    // Mocking data for now
    setParticipants([
      { _id: '1', name: 'Karthik R', email: 'karthik@example.com', city: 'Chennai', totalDistance: 420, status: 'approved' },
      { _id: '2', name: 'Anita Sharma', email: 'anita@example.com', city: 'Bangalore', totalDistance: 385, status: 'pending' },
      { _id: '3', name: 'Rahul Verma', email: 'rahul@example.com', city: 'Delhi', totalDistance: 350, status: 'approved' },
    ]);

    setStats({
      totalParticipants: 3,
      totalDistance: 1155,
      citiesParticipating: 3
    });
  }, []);

  const handleApprove = (id) => {
    setParticipants(participants.map(p => p._id === id ? { ...p, status: 'approved' } : p));
  };

  const handleReject = (id) => {
    setParticipants(participants.map(p => p._id === id ? { ...p, status: 'rejected' } : p));
  };

  const handleExport = () => {
    alert('Exporting data to Excel...');
  };

  const handleSendAnnouncement = () => {
    alert('Announcement feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="space-x-4">
            <button onClick={handleSendAnnouncement} className="btn-primary py-2 px-4 text-sm">Send Announcement</button>
            <button onClick={handleExport} className="btn-cta py-2 px-4 text-sm">Export to Excel</button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card text-center">
            <h3 className="text-gray-400 text-sm uppercase">Total Registrations</h3>
            <p className="text-4xl font-bold text-white mt-2">{stats.totalParticipants}</p>
          </div>
          <div className="glass-card text-center">
            <h3 className="text-gray-400 text-sm uppercase">Total Distance (KM)</h3>
            <p className="text-4xl font-bold text-success mt-2">{stats.totalDistance}</p>
          </div>
          <div className="glass-card text-center">
            <h3 className="text-gray-400 text-sm uppercase">Cities Participating</h3>
            <p className="text-4xl font-bold text-primary mt-2">{stats.citiesParticipating}</p>
          </div>
        </div>

        {/* Participants Table */}
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6">Manage Participants</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400">
                  <th className="pb-4 font-semibold">Name</th>
                  <th className="pb-4 font-semibold">Email</th>
                  <th className="pb-4 font-semibold">City</th>
                  <th className="pb-4 font-semibold">Distance</th>
                  <th className="pb-4 font-semibold">Status</th>
                  <th className="pb-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((p) => (
                  <tr key={p._id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-medium text-white">{p.name}</td>
                    <td className="py-4 text-gray-400">{p.email}</td>
                    <td className="py-4 text-gray-400">{p.city}</td>
                    <td className="py-4 font-bold text-primary">{p.totalDistance} KM</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${p.status === 'approved' ? 'bg-success/20 text-success' : p.status === 'rejected' ? 'bg-red-500/20 text-red-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                        {p.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 text-right space-x-2">
                      {p.status === 'pending' && (
                        <>
                          <button onClick={() => handleApprove(p._id)} className="bg-success/20 text-success px-3 py-1 rounded text-sm hover:bg-success hover:text-white transition-colors">Approve</button>
                          <button onClick={() => handleReject(p._id)} className="bg-red-500/20 text-red-500 px-3 py-1 rounded text-sm hover:bg-red-500 hover:text-white transition-colors">Reject</button>
                        </>
                      )}
                      <button className="bg-white/10 text-white px-3 py-1 rounded text-sm hover:bg-white/20 transition-colors">Generate Cert</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
