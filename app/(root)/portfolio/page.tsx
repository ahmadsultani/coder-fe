import PortfolioBox from "@/_components/organisms/PortfolioBox";
import UpButton from "@/_components/atoms/UpButton";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getAllProject } from "@/_service/project";
import { getAllDivision } from "@/_service/division";

export default async function PortfolioPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["division"],
    queryFn: getAllDivision,
  });

  await queryClient.prefetchQuery({
    queryKey: ["project", { page: 1, size: 9 }],
    queryFn: () => getAllProject({ page: 1, size: 9 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <UpButton />
        <PortfolioBox />
      </main>
    </HydrationBoundary>
  );
}
