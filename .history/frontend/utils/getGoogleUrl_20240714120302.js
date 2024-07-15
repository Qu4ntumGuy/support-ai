function getGoogleOAuthUrl() {
  const googleOAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth?";
  // const clientId = 'client
  const options = {
    redirect_uri: process.env.PUBLIC_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: process.env.PUBLIC_GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      " https://www.googleapis.com/auth/userinfo.profile",
    ],
  };

  const query = new URLSearchParams(options).toString();

  return `${googleOAuthUrl}${query}`;
}

export default getGoogleOAuthUrl;
