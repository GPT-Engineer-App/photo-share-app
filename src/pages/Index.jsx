import React, { useState } from "react";
import { Box, VStack, HStack, Image, Text, Avatar, Input, Button, IconButton, Grid, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaSearch, FaPlus, FaHeart, FaUser } from "react-icons/fa";

const posts = [
  {
    id: 1,
    username: "johndoe",
    imageUrl: "https://images.unsplash.com/photo-1604430456280-43f652c497aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTA5ODA5NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    caption: "Beautiful sunset",
    likes: 100,
    comments: [
      { username: "jane", text: "Stunning!" },
      { username: "mike", text: "Wow, amazing shot!" },
    ],
  },
  {
    id: 2,
    username: "jane",
    imageUrl: "https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMDk4MDk1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    caption: "Portrait session",
    likes: 75,
    comments: [{ username: "johndoe", text: "Lovely portrait!" }],
  },
  // Add more posts...
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderPost = (post) => (
    <Box key={post.id} borderWidth="1px" borderRadius="md" overflow="hidden">
      <Image src={post.imageUrl} alt="Post" />
      <Box p="4">
        <Text fontWeight="bold">{post.username}</Text>
        <Text mt="2">{post.caption}</Text>
        <HStack mt="4">
          <IconButton icon={<FaHeart />} variant="ghost" aria-label="Like" size="sm" />
          <Text>{post.likes} likes</Text>
        </HStack>
        <VStack align="stretch" mt="4" spacing="2">
          {post.comments.map((comment, index) => (
            <HStack key={index}>
              <Text fontWeight="bold">{comment.username}</Text>
              <Text>{comment.text}</Text>
            </HStack>
          ))}
        </VStack>
        <HStack mt="4">
          <Avatar size="sm" name={post.username} src="" />
          <Input placeholder="Add a comment..." size="sm" variant="flushed" />
        </HStack>
      </Box>
    </Box>
  );

  return (
    <Box>
      <VStack spacing="8" py="8">
        <HStack justify="space-between" w="full" px="4">
          <Text fontSize="2xl" fontWeight="bold">
            Instagram Clone
          </Text>
          <IconButton icon={<FaPlus />} aria-label="New Post" />
        </HStack>
        {activeTab === "home" && (
          <Grid templateColumns="repeat(3, 1fr)" gap="4">
            {posts.map((post) => renderPost(post))}
          </Grid>
        )}
        {activeTab === "search" && <Input placeholder="Search" size="lg" w="full" maxW="md" />}
        {activeTab === "activity" && <Text>Activity feed coming soon!</Text>}
        {activeTab === "profile" && (
          <VStack spacing="4" align="center">
            <Avatar size="2xl" name="John Doe" src="" />
            <Text fontSize="xl" fontWeight="bold">
              johndoe
            </Text>
            <HStack>
              <Text fontWeight="bold">100</Text>
              <Text>posts</Text>
            </HStack>
            <Button colorScheme="blue">Edit Profile</Button>
          </VStack>
        )}
      </VStack>
      <HStack bg={useColorModeValue("white", "gray.800")} borderTopWidth="1px" justify="space-around" py="2" pos="fixed" bottom="0" left="0" right="0">
        <IconButton icon={<FaHome />} aria-label="Home" onClick={() => setActiveTab("home")} variant={activeTab === "home" ? "solid" : "ghost"} />
        <IconButton icon={<FaSearch />} aria-label="Search" onClick={() => setActiveTab("search")} variant={activeTab === "search" ? "solid" : "ghost"} />
        <IconButton icon={<FaPlus />} aria-label="New Post" onClick={() => setActiveTab("new")} variant={activeTab === "new" ? "solid" : "ghost"} />
        <IconButton icon={<FaHeart />} aria-label="Activity" onClick={() => setActiveTab("activity")} variant={activeTab === "activity" ? "solid" : "ghost"} />
        <IconButton icon={<FaUser />} aria-label="Profile" onClick={() => setActiveTab("profile")} variant={activeTab === "profile" ? "solid" : "ghost"} />
      </HStack>
    </Box>
  );
};

export default Index;
