import PageBanner from "@/components/PageBanner";

const PublicLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-40">
      <PageBanner
        images={[
          "https://static.wixstatic.com/media/f6e04a_5d3f85f470ac4b1bb0e48a94f31850f7~mv2.jpg/v1/fill/w_1034,h_762,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f6e04a_5d3f85f470ac4b1bb0e48a94f31850f7~mv2.jpg",
          "https://static.wixstatic.com/media/f6e04a_9f475a843b44442890a7a1e2db6d16c1~mv2.jpg/v1/fill/w_1039,h_762,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f6e04a_9f475a843b44442890a7a1e2db6d16c1~mv2.jpg",
        ]}
        title="Press"
      />
      {children}
    </div>
  );
};

export default PublicLayout;
