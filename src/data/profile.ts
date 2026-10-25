/**
 * Editable personal details. Set any link to `null` to hide it.
 * Values marked PLACEHOLDER are NOT real - replace them before publishing.
 */
export const profile = {
  name: "Jandra Hadi Nurkarim",
  /** PLACEHOLDER: one-line headline - confirm or rewrite. */
  headline: "Informatics student & aspiring software developer.",
  /** PLACEHOLDER: max two sentences - confirm or rewrite. */
  intro:
    "I'm an Informatics student at UNIKOM, Bandung. I build web apps and explore machine learning and computer vision.",
  /** PLACEHOLDER: hobbies teaser shown under the intro - confirm or rewrite. */
  personal:
    "Curiosity is what keeps me learning. Away from the screen you'll find me on a motorcycle, with a guitar, or framing everyday moments with my phone.",
  /** PLACEHOLDER: one short paragraph - confirm or rewrite. */
  about:
    "I'm studying Informatics at Universitas Komputer Indonesia (UNIKOM). I enjoy turning ideas into small, working software and I'm looking for opportunities to learn and grow as a developer.",

  /** Public contact details. Remove (null) anything you don't want published. */
  email: "jandra.hadinurkarim@gmail.com" as string | null,
  github: "https://github.com/JandraHadi" as string | null,
  linkedin: "https://www.linkedin.com/in/jandra-hadi-nurkarim-616867293/" as string | null,
  instagram: "https://www.instagram.com/jandra_hd" as string | null,
  facebook: "https://www.facebook.com/share/1QDoxoJUxC/?mibextid=wwXIfr" as string | null,
  medium: "https://medium.com/@jandra.10123431" as string | null,

  /** PLACEHOLDER: add your CV PDF to /public and set e.g. "/cv.pdf". null hides the button. */
  cvUrl: null as string | null,
};

/** Public site URL, set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
