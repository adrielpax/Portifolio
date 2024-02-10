import React from "react";

interface props{
    message:string
}

const Alert = ({ message }:props) => {
  const [showAlert, setShowAlert] = React.useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span>{message}</span>
            <button
              className="text-white"
              onClick={handleCloseAlert}
              aria-label="Fechar"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
