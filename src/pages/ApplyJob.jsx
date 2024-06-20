import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const ApplyJob = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jobListings = JSON.parse(localStorage.getItem("jobListings")) || [];
    const job = jobListings.find((job) => job.id === parseInt(jobId));
    setJob(job);
  }, [jobId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { id: Date.now(), jobId, name, email, coverLetter };
    const jobApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    jobApplications.push(newApplication);
    localStorage.setItem("jobApplications", JSON.stringify(jobApplications));
    navigate("/");
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Apply for {job.title}</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="coverLetter" isRequired>
              <FormLabel>Cover Letter</FormLabel>
              <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">Submit Application</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default ApplyJob;