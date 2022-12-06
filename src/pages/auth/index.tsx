import { NextPage } from 'next'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSidePropsContext } from 'next'
import Layout from '../../components/Layout';
import { AuthContainer } from './styles';
import { Header } from '../../styles/typography';

const Login: NextPage = () => {
    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const router = useRouter();

    if (user) {
        router.push('/');
    }

    return (
        <AuthContainer>
            <Header>

            </Header>
            <Auth appearance={{ theme: ThemeSupa }} supabaseClient={supabaseClient} />
        </AuthContainer>
    )
}

export default Login


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

    // Create authenticated Supabase Client
    const supabase = createServerSupabaseClient(ctx)

    // Check if we have a session
    const {

        data: { session },

    } = await supabase.auth.getSession()


    if (session)

        return {

            redirect: {

                destination: '/',

                permanent: false,

            },

        }


    // Run queries with RLS on the server
    // const { data } = await supabase.from('users').select('*')

    return {

        props: {

            initialSession: session,

        },

    }

}