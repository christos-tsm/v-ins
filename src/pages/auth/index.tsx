import { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import Layout from "../../components/Layouts/GuestLayout";
import { AuthCard, AuthContainer } from "./styles";
import { Header } from "../../styles/typography";
import { authTheme } from "../../styles/theme";
import Navigation from "../../components/Navigation";

const Login: NextPage = () => {
    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const router = useRouter();

    const redirectedFrom = router.query.redirectedFrom;

    if (user) {
        router.push("/");
    }

    return (
        <>
            <Navigation />
            <AuthContainer>
                <AuthCard>
                    <Header>Καλώς ήρθατε ξανά!</Header>

                    <hr />

                    <Auth
                        theme="default"
                        appearance={{ theme: authTheme }}
                        supabaseClient={supabaseClient}
                        redirectTo="http://localhost:3000/app"
                        localization={{
                            variables: {
                                sign_in: {
                                    email_label: "Διεύθυνση email",
                                    password_label: "Κωδικός",
                                },
                                sign_up: {
                                    email_label: "Διεύθυνση email",
                                    password_label: "Κωδικός"
                                }
                            },
                        }}
                    />
                </AuthCard>
            </AuthContainer>
        </>
    );
};

export default Login;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    // Create authenticated Supabase Client
    const supabase = createServerSupabaseClient(ctx);

    // Check if we have a session
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session)
        return {
            redirect: {
                destination: "/",

                permanent: false,
            },
        };

    // Run queries with RLS on the server
    // const { data } = await supabase.from('users').select('*')

    return {
        props: {
            initialSession: session,
        },
    };
};
