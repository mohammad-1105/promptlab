"use client";
import { useToast } from "@/hooks/use-toast";
import Container from "./Container";
import PromptCard from "./PromptCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import PaginationBox from "./Pagination";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function Prompts() {
  const [prompts, setPrompts] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const { toast } = useToast();

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay for debounce

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  // Fetch prompts when the page changes or when debounced search changes
  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        setIsLoading(true);
        const endpoint = debouncedSearch
          ? `/api/search-prompts?search=${debouncedSearch}`
          : `/api/prompts?page=${currentPage}&limit=5`;

        const response = await axios.get(endpoint);
        setPrompts(response.data.prompts);
        setTotalPages(response.data.totalPages || 1);

        toast({
          description: response.data.message,
        });
      } catch (err) {
        toast({
          variant: "destructive",
          description: "Failed to fetch prompts",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrompts();
  }, [currentPage, debouncedSearch]);

  return (
    <div className="relative">
      <div className="relative w-full max-w-md mx-auto mt-5 px-3 sm:px-0">
        <SearchIcon className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or tag"
          className="pl-10 pr-4 py-2 rounded-md w-full"
        />
      </div>
      <Container className="max-w-7xl">
        <section className="py-6 flex flex-wrap justify-center gap-4">
          {isLoading && (
            <Badge variant={"outline"} className="sm:text-xl sm:p-4">
              Loading...
            </Badge>
          )}
          {!isLoading &&
            prompts.length > 0 &&
            prompts.map(
              ({ _id, promptTitle, prompt, author, authorImageUrl, tag }) => (
                <PromptCard
                  key={_id}
                  promptTitle={promptTitle}
                  prompt={prompt}
                  author={author}
                  authorImageUrl={authorImageUrl}
                  tag={tag}
                />
              )
            )}
        </section>
      </Container>

      {!debouncedSearch && ( // Only show pagination if not searching
        <PaginationBox
          className="my-5"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
