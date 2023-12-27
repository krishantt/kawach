import { Button } from "flowbite-react";
// import { useNavigate } from "react-router-dom";

function Index() {
  return (
    <div className="flex align-center justify-center">
      <a href="/qr">
        <Button>Scan Qr</Button>
      </a>
    </div>
  );
}

export default Index;
