export interface product {
  name: string
  url: string
  techstack: string[]
}

export interface project {
  index: number,
  data: mainProject
}

export interface mainProject {
  title: string
  image: string
  detail: string
  experience: string[]
  live: string
  code: string
  stack: string
  admin?: string
}
export interface otherProject {
  title: string
  image: string
  detail: string
  code: string
  stack: string[]
}
