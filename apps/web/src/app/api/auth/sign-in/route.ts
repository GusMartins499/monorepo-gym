import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { api } from '../../../../lib/axios'
interface RequestBody {
  username: string
  password: string
}

export const POST = async (request: NextRequest, _nextResponse: NextResponse) => {
  const body = await request.json() as RequestBody;
  console.log({ body })
  const response = await api.post('/users/authenticate',
    {
      username: body.username,
      password: body.password
    })

  const { token } = response.data

  const cookieStore = await cookies()

  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 15,
    path: '/',
    sameSite: 'lax',
  })

  return NextResponse.json(
    { message: 'Login successful' },
    { status: 200 }
  );
}