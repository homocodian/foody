export interface Data {
  total:       number;
  total_pages: number;
  results:     Result[];
}

export interface Result {
  id?:                       string;
  created_at?:               string;
  updated_at?:               string;
  promoted_at?:              null;
  width?:                    number;
  height?:                   number;
  color?:                    string;
  blur_hash?:                string;
  description?:              null;
  alt_description?:          string;
  urls?:                     Urls;
  links?:                    ResultLinks;
  categories?:               any[];
  likes?:                    number;
  liked_by_user?:            boolean;
  current_user_collections?: any[];
  sponsorship?:              null;
  topic_submissions?:        TopicSubmissions;
  user?:                     User;
  tags?:                     Tag[];
}

export interface ResultLinks {
  self:              string;
  html:              string;
  download:          string;
  download_location: string;
}

export interface Tag {
  type:  string;
  title: string;
}

export interface TopicSubmissions {
  "architecture-interior": ArchitectureInterior;
  wallpapers:              Wallpapers;
  interiors:               ArchitectureInterior;
}

export interface ArchitectureInterior {
  status:      string;
  approved_on: string;
}

export interface Wallpapers {
  status: string;
}

export interface Urls {
  raw:     string;
  full:    string;
  regular: string;
  small:   string;
  thumb:   string;
}

export interface User {
  id:                 string;
  updated_at:         string;
  username:           string;
  name:               string;
  first_name:         string;
  last_name:          string;
  twitter_username:   string;
  portfolio_url:      string;
  bio:                string;
  location:           string;
  links:              UserLinks;
  profile_image:      ProfileImage;
  instagram_username: string;
  total_collections:  number;
  total_likes:        number;
  total_photos:       number;
  accepted_tos:       boolean;
  for_hire:           boolean;
  social:             Social;
}

export interface UserLinks {
  self:      string;
  html:      string;
  photos:    string;
  likes:     string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small:  string;
  medium: string;
  large:  string;
}

export interface Social {
  instagram_username: string;
  portfolio_url:      string;
  twitter_username:   string;
  paypal_email:       null;
}