import { Box, Container, Flex, Grid, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaNewspaper, FaHome, FaInfoCircle } from "react-icons/fa";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link href="#" mx={2} display="flex" alignItems="center">
            <FaHome />
            <Text ml={1}>Home</Text>
          </Link>
          <Link href="#" mx={2} display="flex" alignItems="center">
            <FaNewspaper />
            <Text ml={1}>News</Text>
          </Link>
          <Link href="#" mx={2} display="flex" alignItems="center">
            <FaInfoCircle />
            <Text ml={1}>About</Text>
          </Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
    <Container maxW="container.xl">
      <Flex justify="space-between">
        <Text>&copy; 2023 Financial Times</Text>
        <Flex>
          <Link href="#" mx={2}>
            Privacy Policy
          </Link>
          <Link href="#" mx={2}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Container>
  </Box>
);

const Article = ({ title, summary }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{summary}</Text>
  </Box>
);

const MainContent = () => (
  <Container maxW="container.xl" py={8}>
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
      <Article title="Article 1" summary="Summary of article 1." />
      <Article title="Article 2" summary="Summary of article 2." />
      <Article title="Article 3" summary="Summary of article 3." />
      <Article title="Article 4" summary="Summary of article 4." />
    </Grid>
  </Container>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Index;