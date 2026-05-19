'use client'

/**
 * Sanity Studio embedded at /studio
 * Access it at http://your-domain/studio after deploying,
 * or http://localhost:3000/studio in development.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
