// TODO: For some reason, importing astro types in `activities/[...page].astro`
// is failing the build. So import it here.
import type { Page, MarkdownInstance } from 'astro'

export type Activity = {
  title: string
  date: string
  image: string
  cause: string
  location: string
  served: number
  description: string
}

export interface ActivityPageProps {
  page: Page<MarkdownInstance<Activity>>
}
