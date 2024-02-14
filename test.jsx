import { hind_siliguri } from "@/app/fonts";
import Button from "@/components/ui/Button";

// Mapping chapter numbers to their corresponding names in Bengali
const chapterNames = {
  1: "ভৌত জগত ও পরিমাপ",
  2: "ভেক্টর",
  3: "গতিবিদ্যা",
  4: "নিউটনীয় বলবিদ্যা",
  5: "কাজ,শক্তি ও ক্ষমতা",
  6: "মহাকর্ষ ও অভিকর্ষ",
  7: "পদার্থের গাঠনিক ধর্ম",
  8: "পর্যায়বৃত্তিক গতি",
  9: "তরঙ্গ",
  10: "আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব",
};

export default async function page({
  params,
}: {
  params: { chapter: string },
}) {
  console.log(params.chapter);

  const chapterNumber = params.chapter.substring("chapter_".length);

  const res = await fetch(
    // `http://localhost:3000/api/mongo/physics_1?chapter=${chapterNumber}`,
    `https://batayon-pathagar-0-1.vercel.app/api/mongo/physics_1?chapter=${chapterNumber}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  // console.log(data.playlists);

  return (
    <main className="py-10">
      <div className="container">
        <h1 className={`${hind_siliguri.className} text-lg font-medium`}>
          {chapterNames[chapterNumber]}
        </h1>
        <div className="mt-5 grid grid-cols-3 gap-x-4 gap-y-4">
          {data.playlists.map((item: any) => (
            // <Link href={`${item._id}`}>Link to the playlist</Link>
            <div
              key={item.video_playlist}
              className="bg-primary-foreground border-2 pb-5    w-full "
            >
              <div>
                <div className="   ">
                  <iframe
                    // src={`https://www.youtube.com/embed/videoseries?list=${item.video_playlist}`}
                    src={`https://www.youtube.com/embed/videoseries?list=${item.video_playlist}`}
                    title="YouTube video player"
                    className="w-full aspect-video mb-2	 "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
                <div className="px-2">
                  <h1 className="mb-2 text-md">
                    Chapter Name:{" "}
                    <span className={`${hind_siliguri.className} text-md`}>
                      {chapterNames[chapterNumber]}
                    </span>
                  </h1>
                  <h1 className="mb-4 text-md">Instructor: {item.teacher}</h1>
                  <Button
                    href={`/physics_1/chapter_${chapterNumber}/${item._id}`}
                  >
                    Click here to watch the playlist
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
// console.log(item._id)
