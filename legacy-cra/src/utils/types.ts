export type ProjectType = {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  thumbnail: string;
  dateSince: string;
  isFinished: boolean;
  techs: Array<{ name: string; color: string; link: string }>;
  github: string;
  live?: string;
};
