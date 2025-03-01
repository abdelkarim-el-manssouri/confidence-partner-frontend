export interface BlogsData {
  data: Blog[]
  pagination: Pagination
  links: Links
  meta: Meta
}

export interface BlogOne {
  data: Blog
}
export interface Blog {
  id: number
  title: string
  content: string
  thumbnail: string
  updated_at?: string | null
  created_at?: string | null
  auteur: Auteur
}

export interface Auteur {
  id: number
  name: string
  email: string
  username: string
  image: string
}

export interface Pagination {
  total: number
  per_page: number
  current_page: number
  last_page: number
  from: number
  to: number
}

export interface Links {
  first: string
  last: string
  prev: null | string;
  next: string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  active: boolean
}
