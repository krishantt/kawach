import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

const QRScanner = () => {
  const [result, setResult] = useState('');
  const [isScanned, setScanned] = useState(false);
  const [userData, setUserData] = useState({
    floating_email: '',
    floating_dob: '',
    floating_temp_addr: '',
    floating_perm_addr: '',
    floating_password: '',
    floating_first_name: '',
    floating_last_name: '',
    floating_phone: '',
    floating_company: ''
})

  const handleScan = async (data) => {
    if (data) {
      setResult(data.text);
      setScanned(true);
      const response = await fetchUserData(result);
      setUserData(response);
    }
  };

  const fetchUserData = async (publicKey) => {
    return new Promise((resolve) => {
      // Hardcoded user data mapping
      const userMapping = {
        'public_key_1': {
          email: 'krishtimil@gmail.com',
          dob: '2060-01-01',
          temp_addr: 'Lalitpur',
          perm_addr: 'Pulchowk',
          first_name: 'Krishant',
          last_name: 'Timalsina',
          phone: '98xxxxxxxx',
          company: 'ABC'
        },
      }
      setTimeout(() => {
        resolve(userMapping[publicKey] || {});
      }, 100); 
    })
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Scanned result: {result}</p>
      {{isScanned} &&
      <div>
        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Name: {userData.floating_first_name} {userData.floating_last_name}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              EmailL: {userData.floating_email}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              DOB: {userData.floating_dob}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Temporary Address: {userData.floating_temp_addr}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Permanent Address: {userData.floating_perm_addr}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Phone Number : {userData.floating_phone}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Company : {userData.floating_company}
            </li>
          </ul>
      </div>
      }
    </div>
  );
};

export default QRScanner;
