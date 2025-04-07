const config = {
  routes: {
    // General pages
    register: "/register",
    login: "/login",
    profile: "/p/:username",

    // User pages
    home: "/",
    products: "/products",
    activity: "/activity",
    affiliate: "/affiliate",
    payment: "/payment",
    paymentHistory: "/paymentHistory",
    software: "/software",
    tickets: "/tickets",

    // Admin pages
    adminHome: "/admin/home",
    adminAffiliate: "/admin/affiliate",
    adminAnalytics: "/admin/analytics",
    adminBanking: "/admin/banking",
    adminLicense: "/admin/license",
    adminPost: "/admin/post",
    adminSoftware: "/admin/software",
    adminTicket: "/admin/ticket",
    adminUser: "/admin/user",

    // Not found page
    notFound: "*",
  },
};

export default config;
