import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const patients = [
  {
    id: '1',
    ward: '4',
    room: '402',
    uhid: '344912',
    name: 'JEBA',
    status: 'CRITICAL',
  },
  // Add more patient data as needed
];

const PatientList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium">Patients List</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ward</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UHID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">{patient.ward}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.room}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.uhid}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => navigate(`/patient/${patient.id}`)}
                    className="text-teal-600 hover:text-teal-900"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientList;