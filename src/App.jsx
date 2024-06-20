import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx"; // Import the new PostJob component
import ApplyJob from "./pages/ApplyJob.jsx"; // Import the new ApplyJob component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/post-job" element={<PostJob />} /> {/* Add the new route */}
      <Route path="/apply-job/:jobId" element={<ApplyJob />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
