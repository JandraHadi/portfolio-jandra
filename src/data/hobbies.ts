/**
 * Hobbies content. Photos are NOT listed here: the Hobbies page reads each hobby's folder
 * at build time (see src/lib/hobbyPhotos.ts), so adding a photo = dropping a file in the folder.
 *
 *   riding       -> public/images/riding/       riding1.jpeg, riding2.jpeg, ...
 *   guitar       -> public/images/guitar/       guitar1.jpeg, guitar2.jpeg, ...
 *   photography  -> public/images/photography/  photography1.jpeg, photography2.jpeg, ...
 *
 * Optional: give a photo a specific description in `alts`, keyed by file name.
 * Photos without an entry get a generic alt text built from the hobby title.
 */
export type Hobby = {
  id: string;
  title: string;
  kicker: string;
  words: string[];
  body: string[];
  /** Folder under public/images/ */
  folder: string;
  alts?: Record<string, string>;
  /** Crop shared by every photo in this hobby, keeps the grid consistent. */
  aspect: "landscape" | "portrait";
  /** CSS object-position for the crop ("x% y%"); lower y keeps subjects that sit low in the frame. */
  position?: string;
  /** Photos shown before "Load more". */
  pageSize: number;
};

export const hobbies: Hobby[] = [
  {
    id: "riding",
    title: "Motorcycle riding",
    kicker: "The long way round",
    words: ["Exploration", "Curiosity", "The journey"],
    body: [
      "On a bike, the route matters as much as the destination. I like taking roads I haven't tried yet and seeing what's around the next bend.",
      "Every ride is a small exploration: new places, new views, and the occasional detour that turns into the best part of the day.",
    ],
    folder: "riding",
    // alts: { "riding1.jpeg": "Describe the photo" },
    aspect: "landscape",
    position: "50% 62%",
    pageSize: 6,
  },
  {
    id: "guitar",
    title: "Guitar & singing",
    kicker: "One chord at a time",
    words: ["Consistency", "Patience", "Self-expression"],
    body: [
      "Playing guitar and singing is where I practice patience. Progress comes slowly, a little each day, and the repetition is part of the joy.",
      "It's also how I express myself without needing words for everything. I'm still learning, and I like it that way.",
    ],
    folder: "guitar",
    aspect: "landscape",
    position: "50% 65%",
    pageSize: 6,
  },
  {
    id: "photography",
    title: "Mobile photography",
    kicker: "Seen through a phone",
    words: ["Composition", "Light", "Perspective"],
    body: [
      "I enjoy capturing moments with my phone camera. A good photo is about where you stand, how the light falls, and what you choose to frame, not the gear.",
      "It trains me to notice small things in ordinary days, and to find something worth keeping in them.",
    ],
    folder: "photography",
    aspect: "portrait",
    pageSize: 9,
  },
];
