type ResultKeys =
  | "code"
  | "short_link"
  | "full_short_link"
  | "short_link2"
  | "full_short_link2"
  | "short_link3"
  | "full_short_link3"
  | "share_link"
  | "full_share_link"
  | "original_link";

export type Result = Record<ResultKeys, string>;
