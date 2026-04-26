const ZOHOCONFIG = {
    "client_id": process.env.ZOHO_CLIENT_ID,
    "client_secret": process.env.ZOHO_CLIENT_SECRET,
    "redirect_uri": process.env.ZOHO_REDIRECT_URI,
    "refresh_token": process.env.ZOHO_REFRESH_TOKEN,
    "grant_type": "refresh_token",
    "accounts_url": process.env.ZOHO_ACCOUNTS_URL,
    "user_identifier": process.env.ZOHO_EMAIL
};
module.exports = ZOHOCONFIG;