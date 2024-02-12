import HeroSection from "@organisms/Hero";
import Projects from "@organisms/Projects";
import ContactUs from "@organisms/ContactUs";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getAllBestProject, getAllProject } from "@/_service/project";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["best-project"],
    queryFn: getAllBestProject,
  });

  await queryClient.prefetchQuery({
    queryKey: ["project", { page: 1, size: 9 }],
    queryFn: () => getAllProject({ page: 1, size: 9 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <HeroSection />
        <Projects />
        <ContactUs />
      </main>
    </HydrationBoundary>
  );
}
