import { getSession, destroySession} from '~/util/cookie';
import { redirect } from '@remix-run/node';

export const action = async ({ request }) => {
    const session = await getSession(request.headers.get('Cookie'))
    const cookie = await destroySession(session)


    return redirect('/login', {
        headers: {
            "Set-Cookie": cookie
        }
    })
}