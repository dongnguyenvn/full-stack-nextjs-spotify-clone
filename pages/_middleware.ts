import { NextRequest, NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

export default function middleware(req: NextRequest) {
  if (signedinPages.includes(req.nextUrl.pathname)) {
    const token = req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN

    if (!token) return NextResponse.redirect('/signin')
  }
}
