const User = require("../model/user");

async function googleOauthToken(code) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
  };
  try {
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getGoogleUser({ id_token, access_token }) {
  const url = `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`;
  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function findAndUpdateUser(query, update, options) {
  try {
    const user = await User.findOneAndUpdate(query, update, options);
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { googleOauthToken, getGoogleUser };
