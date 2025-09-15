import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { api } from '../../../../lib/axios'
interface RequestBody {
  username: string
  password: string
}

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json() as RequestBody;

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
      sameSite: 'strict',
    })

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}