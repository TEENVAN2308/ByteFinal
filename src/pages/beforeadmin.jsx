// src/AdminLogin.js
import React, { useState } from 'react';
import '../stylesheet/beforeadmin.css'
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, VStack, Heading, Flex } from "@chakra-ui/react";


const AdminLogin = () => {
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'badmin';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
        navigate('/admin');
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      bg="gray.100"
      p={40}
    >
      <Box
        width={{ base: "90%", sm: "400px" }}
        p={80}
        boxShadow="lg"
        bg="transparent"
        borderRadius="md"
        border="2px solid black"
        textAlign="center"
      >
        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={20}>Admin Login</Heading>
        <VStack spacing={4}>
          <Input
            placeholder="Admin Name"
            value={username}
onChange={(e) => setUsername(e.target.value)}
            fontSize={{ base: "md", md: "lg" }}
            p={14}
          />
          <Input
            placeholder="Password"
            type="password"
           value={password}
onChange={(e) => setPassword(e.target.value)}
            fontSize={{ base: "md", md: "lg" }}
            p={14}
          />
          <Button onClick={handleLogin} colorScheme="blue" fontSize={{ base: "md", md: "lg" }} p={14} >
            Login
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AdminLogin;