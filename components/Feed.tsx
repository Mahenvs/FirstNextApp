"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={() => {}}
          handleDelete={() => {}}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value)
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form action="" className=" relative w-full flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for a tag"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>  
        <PromptCardList data={posts} handleTagClick={() => {}} />
      
    </section>
  );
};

export default Feed;
