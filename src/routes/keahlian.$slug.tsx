import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/keahlian/$slug")({
  beforeLoad: ({ params }) => {
    // Redirect alias to /skills/$slug
    const slug = params.slug === "game-artist" || params.slug === "game-programmer" ? "game-development" : params.slug === "data-analyst" ? "data-science" : params.slug;
    throw redirect({
      to: "/skills/$slug",
      params: { slug },
    });
  },
  component: () => null,
});
