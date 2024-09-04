"use client";
import { useToast } from "@/hooks/use-toast";
import Container from "./Container";
import PromptCard from "./PromptCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import PaginationBox from "./Pagination";

export default function Prompts() {
  const [prompts, setPrompts] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/api/prompts?page=${currentPage}&limit=5`
        );
        setPrompts(response.data.prompts);
        setTotalPages(response.data.totalPages);
        toast({
          description: response.data.message,
        });
      } catch (err) {
        console.log("Error fetching prompts :: ", err);
        toast({
          variant: "destructive",
          description: "Failed to fetch prompts",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrompts();
  }, [currentPage]);

  return (
    <div className="relative">
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

      <PaginationBox
        className="my-5"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
