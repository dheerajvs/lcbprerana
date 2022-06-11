// TODO: For some reason, importing astro types in `activities/[...page].astro`
// is failing the build. So import it here.
import type { Page, MarkdownInstance } from 'astro'

export type About = {
  image: string
  about: string
  officers: {
    name: string
    title: string
    photo: string
  }[]
}

export type Activity = {
  title: string
  date: string
  image: string
  causeAndProjectType: string
  address: string
  geo?: string
  served: number
  description: string
}

export interface ActivityPageProps {
  page: Page<MarkdownInstance<Activity>>
}
