import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "./dashboard.css";
import { FaBookOpen } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoQrCode } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import document from "../assets/images/front.jpg";
import qr from "../assets/images/front.jpg";
import { FileInput, Label } from "flowbite-react";
import { Button } from "flowbite-react";
import { QRCode } from "react-qrcode-logo";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function Component() {
  const [showQr, setQR] = useState(false);
  const [showDocument, setDocument] = useState(false);
  const [formData, setFormData] = useState({
    floating_email: "",
    floating_dob: "",
    floating_temp_addr: "",
    floating_perm_addr: "",
    floating_password: "",
    floating_first_name: "",
    floating_last_name: "",
    floating_phone: "",
    floating_company: "",
  });

  // handle input change to replicate
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormChange = (e) => {
    e.preventDefault();
    const newFormData = {
      floating_email: e.target.elements.floating_email.value,
      floating_first_name: e.target.elements.floating_first_name.value,
      floating_last_name: e.target.elements.floating_last_name.value,
      floating_phone: e.target.elements.floating_phone.value,
      floating_company: e.target.elements.floating_company.value,
    };

    setFormData(newFormData);
  };

  return (
    <div className="tabs">
      <Tabs aria-label="Default tabs">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="justify-center">
            <FaUserCircle class="text-8xl" />
          </div>

          <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Name: {formData.floating_first_name} {formData.floating_last_name}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              EmailL: {formData.floating_email}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              DOB: {formData.floating_dob}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Temporary Address: {formData.floating_temp_addr}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Permanent Address: {formData.floating_perm_addr}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Phone Number : {formData.floating_phone}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Company : {formData.floating_company}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Registered on : {new Date().toLocaleString()}
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Is Verified: No
            </li>
          </ul>
        </Tabs.Item>
        <Tabs.Item title="Upload-Info" icon={FaBookOpen}>
          <div className="flex flex-col">
            <form className="max-w-md mx-auto" onClick={handleFormChange}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  value={formData.floating_email}
                  onInput={handleInputChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  name="floating_dob"
                  id="floating_dob"
                  value={formData.floating_dob}
                  onInput={handleInputChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_dob"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  DOB (YYYY-MM-DD BS)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_temp_addr"
                  id="floating_temp_addr"
                  value={formData.floating_temp_addr}
                  onInput={handleInputChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_temp_addr"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Temporary Address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_perm_addr"
                  id="floating_perm_addr"
                  value={formData.floating_perm_addr}
                  onInput={handleInputChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_temp_addr"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Permanent Address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  value={formData.floating_password}
                  onChange={handleInputChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    value={formData.floating_first_name}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    value={formData.floating_last_name}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="floating_phone"
                    id="floating_phone"
                    value={formData.floating_phone}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    value={formData.floating_company}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Upload Docs" icon={IoCloudUploadSharp}>
          <div className="flex flex-col w-full items-center justify-center">
            <div className="mb-2">
              <div>
                <Label
                  htmlFor="small-file-upload"
                  value="Upload your Document"
                />
              </div>
              <FileInput id="small-file-upload" sizing="l" />
            </div>
            <Button onClick={() => setTimeout(() => setDocument(true), 2000)}>
              Upload
            </Button>
            {showDocument ? <img src={document}></img> : <></>}
          </div>
        </Tabs.Item>
        <Tabs.Item title="QR code" icon={IoQrCode}>
          <button
            class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setTimeout(() => setQR(true), 2000)}
          >
            Generate QR Code
          </button>
          {showQr ? (
            <QRCode value="3a0b2c4d5e6f7a819d3e9f68cf32578db1f997d35b5a555bf432a82ed23d2b8c"></QRCode>
          ) : (
            <></>
          )}
        </Tabs.Item>
        <Tabs.Item title="Log-Out" icon={FiLogOut} href="/login"></Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Component;
