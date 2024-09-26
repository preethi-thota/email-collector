import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  try {
    const { error } = await supabase
      .from('subscriptions')
      .insert({ email })

    if (error) throw error

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 })
  } catch (error: any) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'You are already subscribed' }, { status: 400 })
    }
    console.error('Error inserting email:', error)
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 })
  }
}