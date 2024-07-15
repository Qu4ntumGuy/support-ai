function getGoogleOAuthUrl() {
  const googleOAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth?";

  // const google_redirect_uri = "http://localhost:8000/api/session/oauth/google";
  const google_redirect_uri = process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL;

  console.log(google_redirect_uri);

  const options = {
    redirect_uri: process.env.PUBLIC_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: process.env.PUBLIC_GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  console.log(options);

  const query = new URLSearchParams(options).toString();

  console.log(query);

  return `${googleOAuthUrl}${query}`;
}

export default getGoogleOAuthUrl;
