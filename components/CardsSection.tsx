import Link from "next/link";
import dynamic from "next/dynamic";
import PromptCardSkeleton from "./PromptCardSkeleton";

const PromptCard = dynamic(() => import("@/components/PromptCard"), {
  ssr: false,
  loading: () => <PromptCardSkeleton />,
});

export default function CardsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Featured Prompts
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover the Best Prompts
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse through the latest and most popular prompts submitted by
              our community. Find inspiration and collaborate on your next
              project.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl w-full py-16">
          <div className="flex gap-4 justify-center flex-wrap">
            <PromptCard
              promptTitle="JavaScript Mentor: Code Guidance"
              prompt="I want you to be my JavaScript mentor. Whenever I come to you with JavaScript problems, your role is to provide precise explanations and solutions without long-winded responses. Feel free to use real-world examples to clarify concepts and help me understand better."
              author="Mohammad Aman"
              authorImageUrl="https://lh3.googleusercontent.com/a/ACg8ocKhgXxJaDTzukdi2S88TMRe3imalrw230vbBuj4O6suPRPAnW1t=s96-c"
              tag="JavaScript"
            />
            <PromptCard
              promptTitle="Medical Mentor: Patient Case Discussions"
              prompt="I want you to act as my medical mentor. Whenever I present a patient case to you, guide me through the diagnosis and treatment process with clear and concise explanations. Provide context and real-life examples where applicable, but keep it brief and to the point."
              author="Mohammad Aman"
              authorImageUrl="https://lh3.googleusercontent.com/a/ACg8ocKhgXxJaDTzukdi2S88TMRe3imalrw230vbBuj4O6suPRPAnW1t=s96-c"
              tag="Medicine"
            />
            <PromptCard
              promptTitle="Writing Mentor: Creative Storytelling"
              prompt="I want you to be my creative writing mentor. Whenever I bring a story idea or writing challenge to you, offer precise and focused advice on how to develop the plot, characters, or setting. Use real-world examples where it can enhance understanding, but keep your advice succinct."
              author="Mohammad Aman"
              authorImageUrl="https://lh3.googleusercontent.com/a/ACg8ocKhgXxJaDTzukdi2S88TMRe3imalrw230vbBuj4O6suPRPAnW1t=s96-c"
              tag="CreativeWriting"
            />
            <PromptCard
              promptTitle="Mentor in My Web Development Journey"
              prompt="I’m on a journey to become a skilled web developer, focusing on both front-end and back-end technologies. As a mentor, guide me with structured learning paths, key resources, and best practices. Help me set goals, overcome challenges, and improve my coding skills. Provide feedback on my projects and suggest ways to stay current with industry trends. Your guidance will be crucial in building a strong foundation for my career."
              author="Hey You"
              authorImageUrl="https://lh3.googleusercontent.com/a/ACg8ocLo4lXBdIivscMalLc7kNrPG70jBZDhEQuPFM5CNBRtESSo0w=s96-c"
              tag="WebDevelopment"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/explore-prompts"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View More Prompts
          </Link>
        </div>
      </div>
    </section>
  );
}
