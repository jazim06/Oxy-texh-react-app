import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, ArrowLeft, Edit, Users, Thermometer, Heart, Wind, Settings as Lungs } from 'lucide-react';

const PatientDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-500" />
              <div className="w-8 h-8 rounded-full bg-teal-500" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Patient:</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type here to search"
                  className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Patient Info */}
          <div className="p-6">
            <div className="flex items-start space-x-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                alt="Alex Smith"
                className="w-24 h-24 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-2xl font-semibold">Alex Smith</h3>
                      <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                        Status: Active
                      </span>
                    </div>
                    <p className="text-gray-500 mt-1">PID: 1 | Row: 1 | 76 Years</p>
                  </div>
                  <button className="flex items-center text-teal-600 hover:text-teal-800">
                    <Edit className="w-5 h-5 mr-1" />
                    Edit Profile
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Personal Information</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">DOB:</span> January 15, 1947</p>
                      <p><span className="font-medium">Age:</span> 76</p>
                      <p><span className="font-medium">Blood group:</span> O+</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Care Team</h4>
                    <div className="space-y-2">
                      <p>1. Adolph Mccallister (CN)</p>
                      <p>2. Stephen Warren (Physician)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vital Signs */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-yellow-800">Blood Pressure</h4>
                  <span className="text-yellow-600">
                    <Heart className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-2xl font-bold text-yellow-900 mt-2">120/80</p>
                <p className="text-sm text-yellow-600 mt-1">5% higher</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-green-800">Heart rate</h4>
                  <span className="text-green-600">
                    <Heart className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-2xl font-bold text-green-900 mt-2">72bpm</p>
                <p className="text-sm text-green-600 mt-1">2% lower</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-blue-800">Body Temperature</h4>
                  <span className="text-blue-600">
                    <Thermometer className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-2xl font-bold text-blue-900 mt-2">99.4°F</p>
                <p className="text-sm text-blue-600 mt-1">Normal</p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-indigo-800">O2 Flow rate</h4>
                  <span className="text-indigo-600">
                    <Wind className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-2xl font-bold text-indigo-900 mt-2">2 L/min</p>
                <p className="text-sm text-indigo-600 mt-1">4% higher</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-purple-800">SpO2 rate</h4>
                  <span className="text-purple-600">
                    <Lungs className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-2xl font-bold text-purple-900 mt-2">98%</p>
                <p className="text-sm text-purple-600 mt-1">2% lower</p>
              </div>
            </div>

            {/* Tabs and Graph */}
            <div className="mt-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button className="border-teal-500 text-teal-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                    Statistics
                  </button>
                  <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                    CAMERA
                  </button>
                  <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                    RECORDS
                  </button>
                  <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                    HISTORY
                  </button>
                </nav>
              </div>

              {/* Graph */}
              <div className="mt-6">
                <div className="border rounded-lg p-4">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-24 pr-4 text-sm font-medium text-gray-500">SpO2 (%)</td>
                        <td>
                          <div className="h-16 bg-gray-50">
                            <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                              <path
                                d="M0,10 L20,8 L40,12 L60,7 L80,13 L100,9"
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-24 pr-4 text-sm font-medium text-gray-500">O2 Flow (l)</td>
                        <td>
                          <div className="h-16 bg-gray-50">
                            <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                              <path
                                d="M0,10 L20,11 L40,11 L60,12 L80,12 L100,13"
                                fill="none"
                                stroke="#6366F1"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-24 pr-4 text-sm font-medium text-gray-500">Pulse (BPM)</td>
                        <td>
                          <div className="h-16 bg-gray-50">
                            <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                              <path
                                d="M0,10 Q5,5 10,15 T20,5 T30,15 T40,5 T50,15 T60,5 T70,15 T80,5 T90,15 T100,5"
                                fill="none"
                                stroke="#EF4444"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDetails;