import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const storedJobListings = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobListings);
  }, []);


  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {jobListings.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading as="h2" size="md">{job.title}</Heading>
                <Text fontWeight="bold">{job.company}</Text>
                <Text>{job.location}</Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Link to={`/apply-job/${job.id}`}>
                  <Button colorScheme="teal">Apply Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;