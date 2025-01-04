import axios from "axios";

const DownloadExcel = () => {
  const handleDownload = async () => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    if (!token) {
      console.error("No token found!");
      return;
    }

    try {
      const response = await axios.get("https://trackbe.onrender.com/download-excel", {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Bearer token in the Authorization header
        },
        responseType: "blob", // Ensure the response is treated as a file
      });

      // Create a downloadable file link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.xlsx"); // Set the filename
      document.body.appendChild(link);
      link.click();
      link.remove(); // Clean up the link
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700"
    >
      Download Excel
    </button>
  );
};

export default DownloadExcel;
